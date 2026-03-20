export interface ProgressItem {
  id: string;
  type: string;
  title: string;
  status: string;
  priority: string | null;
  sprint: string | null;
  boardNumber: number;
  boardTitle: string;
  boardUrl: string;
  repository: string | null;
  repositoryUrl: string | null;
  itemUrl: string | null;
  updatedAt: string;
}

export interface ProgressBoard {
  number: number;
  title: string;
  url: string;
  summary: string;
  itemCount: number;
  statusCounts: Record<string, number>;
  priorityCounts: Record<string, number>;
  sprintCounts: Record<string, number>;
  items: ProgressItem[];
}

export interface ProgressSnapshotSummary {
  boardCount: number;
  itemCount: number;
  statusCounts: Record<string, number>;
  priorityCounts: Record<string, number>;
}

export interface ProgressSnapshot {
  generatedAt: string;
  organization: string;
  summary: ProgressSnapshotSummary;
  boards: ProgressBoard[];
}