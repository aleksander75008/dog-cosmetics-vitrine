# dog-cosmetics-vitrine

A product showcase vitrine for dog cosmetics, built with React + Vite.

---

## Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Run the test suite (Vitest)
npm test

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## GitHub API / CI Pre-flight (AC #1 & #12)

This section documents the root causes of common GitHub API tree-push failures
and the one-time manual steps required before CI runs correctly.

### Token scope check

Ensure the Personal Access Token (PAT) or GitHub App token used for API pushes
has **`contents: write`** permission on this repository. A token with only
`contents: read` will receive a `403 Forbidden` on any tree/commit/ref mutation
endpoint.

### Branch base SHA reset (422 / 409 errors)

| Error | Root cause | Fix |
|-------|-----------|-----|
| `422 Unprocessable Entity` | The `base_tree` or `parent` SHA sent in the API request does not match the current HEAD of the target branch. This happens when the branch has been force-pushed or rebased since the SHA was read. | Re-fetch the latest commit SHA with `GET /repos/{owner}/{repo}/git/refs/heads/{branch}` immediately before constructing the tree payload, then retry. |
| `409 Conflict` | A concurrent push landed between your SHA read and your push, causing a non-fast-forward conflict. | Same fix: re-read HEAD SHA and retry. If the branch is permanently diverged, reset it to the default branch's latest commit: `PATCH /repos/{owner}/{repo}/git/refs/heads/{branch}` with `{ "sha": "<default-branch-HEAD>", "force": true }`. |

**Procedure to reset a branch to the default branch HEAD:**

```bash
# 1. Get the default branch HEAD SHA
curl -s -H "Authorization: Bearer $TOKEN" \
  https://api.github.com/repos/OWNER/REPO/git/refs/heads/main \
  | jq '.object.sha'

# 2. Force-update the feature branch to that SHA
curl -s -X PATCH \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"sha":"<SHA_FROM_STEP_1>","force":true}' \
  https://api.github.com/repos/OWNER/REPO/git/refs/heads/FEATURE_BRANCH
```

### One-time GitHub Actions enablement

GitHub Actions is **not automatically enabled** on newly forked or transferred
repositories. Before opening a PR, a repository admin must:

1. Navigate to the repository on GitHub.
2. Click the **Actions** tab.
3. Click **"I understand my workflows, go ahead and enable them"** (if prompted).

This is a one-time manual step that cannot be automated via the API. Without it,
the `verify.yml` workflow will be silently ignored and no CI status will appear
on pull requests.
