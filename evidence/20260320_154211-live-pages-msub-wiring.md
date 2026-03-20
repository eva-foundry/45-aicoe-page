# Live Pages And msub Wiring

## Packet

- Date: 2026-03-20
- Scope: make the 45-aicoe-page progress surface live on GitHub Pages and confirm the exact msub wiring used by the workflow

## GitHub State

- Repository: `https://github.com/eva-foundry/45-aicoe-page`
- Landing commit: `cc97d2f feat(45): publish live progress page`
- Remote workflow inventory now includes `Publish Progress Page`.
- CI run `23350226409` completed with conclusion `success`.
- Publish run `23350334823` completed with conclusion `success`.
- Public Pages URL: `https://eva-foundry.github.io/45-aicoe-page/`
- Public URL probe result: HTTP `200`

## msub State

- Subscription: `c59ee575-eb2a-4b51-a865-4b618f9add0a`
- Tenant: `bfb12ca1-7f37-47d5-9cf5-8aa52214a0d8`
- Resource group: `EVA-Sandbox-dev`
- Key Vault: `msubsandkv202603031449`
- Managed identity: `msub-kernel-engine-identity`
- Managed identity client ID: `093f9bc7-cc52-44c7-9d29-63cf8ffec16e`
- Federated credential created: `github-45-aicoe-page-main`
- Federated subject: `repo:eva-foundry/45-aicoe-page:ref:refs/heads/main`
- Key Vault access confirmed: the managed identity already holds `Key Vault Secrets User` on the vault scope.

## Repo Secrets

- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

## Workflow Outcome

- Initial push-triggered publish run `23350226411` failed because GitHub Pages was not yet enabled on the repository.
- Pages was enabled with build type `workflow`.
- A manual dispatch of `Publish Progress Page` succeeded after enablement.
- The workflow authenticated to Azure using OIDC, retrieved `github-pat-projects` from Key Vault, generated the live project snapshot, built the site, uploaded the artifact, and deployed it to GitHub Pages.

## Notes

- The public progress surface is now live from GitHub and backed by msub-hosted secrets rather than repository-stored PAT values.
- The only remaining technical follow-up identified in this packet is the non-blocking Vite chunk-size warning during build.
