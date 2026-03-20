import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const organization = "eva-foundry";
const outputPath = resolve("src/data/progressSnapshot.ts");
const projectDefinitions = [
  { number: 1, summary: "Portfolio-wide roadmap and delivery priorities." },
  { number: 2, summary: "Production services currently advancing through delivery." },
  { number: 3, summary: "Infrastructure, Azure, and platform enablement work." },
  { number: 4, summary: "Sprint execution packet tracking and D3PDCA flow." },
  { number: 5, summary: "Documentation, learning assets, and enablement materials." },
];

const token = process.env.GH_PROJECTS_TOKEN ?? process.env.GH_TOKEN;

if (!token) {
  throw new Error("GH_PROJECTS_TOKEN or GH_TOKEN is required to generate the progress snapshot.");
}

const graphqlQuery = `
query($org:String!, $number:Int!) {
  organization(login:$org) {
    projectV2(number:$number) {
      title
      url
      items(first:100) {
        nodes {
          id
          type
          updatedAt
          content {
            __typename
            ... on DraftIssue {
              title
              body
            }
            ... on Issue {
              title
              url
              repository {
                nameWithOwner
                url
              }
            }
            ... on PullRequest {
              title
              url
              repository {
                nameWithOwner
                url
              }
            }
          }
          fieldValues(first:20) {
            nodes {
              __typename
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
                field {
                  ... on ProjectV2SingleSelectField {
                    name
                  }
                }
              }
              ... on ProjectV2ItemFieldTextValue {
                text
                field {
                  ... on ProjectV2Field {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

function increment(map, key) {
  const normalizedKey = key || "Unspecified";
  map[normalizedKey] = (map[normalizedKey] ?? 0) + 1;
}

function parseBodyValue(body, label) {
  if (!body) {
    return null;
  }

  const expression = new RegExp(`\\*\\*${label}\\*\\*:\\s*(.+)`, "i");
  const match = body.match(expression);
  return match ? match[1].trim() : null;
}

async function fetchProject(number) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "aicoe-progress-pages",
    },
    body: JSON.stringify({
      query: graphqlQuery,
      variables: { org: organization, number },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed for board ${number}: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(`GitHub GraphQL returned errors for board ${number}: ${payload.errors.map((error) => error.message).join("; ")}`);
  }

  return payload.data.organization.projectV2;
}

function toFieldMap(fieldValues) {
  return fieldValues.reduce((accumulator, entry) => {
    const fieldName = entry?.field?.name;
    if (!fieldName) {
      return accumulator;
    }

    const value = entry.name ?? entry.text ?? null;
    if (value) {
      accumulator[fieldName] = value;
    }

    return accumulator;
  }, {});
}

function buildItem(node, board) {
  const body = node.content?.body ?? "";
  const fieldMap = toFieldMap(node.fieldValues.nodes);
  const repositoryUrl = node.content?.repository?.url ?? parseBodyValue(body, "Repository");

  return {
    id: node.id,
    type: node.type,
    title: node.content?.title ?? fieldMap.Title ?? "Untitled item",
    status: fieldMap.Status ?? parseBodyValue(body, "Current State") ?? "Todo",
    priority: fieldMap.Priority ?? parseBodyValue(body, "Priority"),
    sprint: fieldMap.Sprint ?? null,
    boardNumber: board.number,
    boardTitle: board.title,
    boardUrl: board.url,
    repository: node.content?.repository?.nameWithOwner ?? repositoryUrl?.replace("https://github.com/", "") ?? null,
    repositoryUrl,
    itemUrl: node.content?.url ?? null,
    updatedAt: node.updatedAt,
  };
}

const boards = [];
const summary = {
  boardCount: projectDefinitions.length,
  itemCount: 0,
  statusCounts: {},
  priorityCounts: {},
};

for (const definition of projectDefinitions) {
  const project = await fetchProject(definition.number);
  const board = {
    number: definition.number,
    title: project.title,
    url: project.url,
    summary: definition.summary,
  };
  const items = project.items.nodes.map((node) => buildItem(node, board));
  const statusCounts = {};
  const priorityCounts = {};
  const sprintCounts = {};

  for (const item of items) {
    increment(statusCounts, item.status);
    increment(summary.statusCounts, item.status);

    if (item.priority) {
      increment(priorityCounts, item.priority);
      increment(summary.priorityCounts, item.priority);
    }

    if (item.sprint) {
      increment(sprintCounts, item.sprint);
    }
  }

  summary.itemCount += items.length;

  boards.push({
    ...board,
    itemCount: items.length,
    statusCounts,
    priorityCounts,
    sprintCounts,
    items: items.sort((left, right) => Date.parse(right.updatedAt) - Date.parse(left.updatedAt)),
  });
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  organization,
  summary,
  boards,
};

const moduleContent = `import type { ProgressSnapshot } from "./progressTypes";

export const progressSnapshot: ProgressSnapshot = ${JSON.stringify(snapshot, null, 2)};
`;

await mkdir(resolve("src/data"), { recursive: true });
await writeFile(outputPath, moduleContent, "utf8");

console.log(`Generated progress snapshot for ${summary.itemCount} items across ${summary.boardCount} boards.`);