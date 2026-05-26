#!/usr/bin/env bash
# Intent invocation banner.
# Prints the colored banner for /intent invocations.
# Reads skills/ at runtime; maps to the 8 canonical categories from docs/src/lib/skills.ts.

set -euo pipefail

# Resolve the script's directory and repo root so it works from any CWD.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Assumes this script lives at <repo>/hooks/.
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DIR="$REPO_ROOT/skills"

# TODO: implementation in subsequent tasks.
echo "banner.sh: skeleton placeholder"
