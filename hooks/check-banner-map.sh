#!/usr/bin/env bash
# Verify that every skill in skills/ is present in hooks/banner.sh CATEGORY_MAP.
# Exits 0 on match, 1 on drift. Run pre-release.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Assumes this script lives at <repo>/hooks/.
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DIR="$REPO_ROOT/skills"
BANNER_SH="$SCRIPT_DIR/banner.sh"

missing=()

for entry in "$SKILLS_DIR"/*/SKILL.md; do
  [[ -f "$entry" ]] || continue
  skill="$(basename "$(dirname "$entry")")"
  if ! grep -q "\"${skill}:" "$BANNER_SH"; then
    missing+=("$skill")
  fi
done

if [[ ${#missing[@]} -eq 0 ]]; then
  total="$(find "$SKILLS_DIR" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')"
  echo "check-banner-map: OK — all ${total} skills mapped."
  exit 0
else
  printf 'check-banner-map: FAIL — %d skill(s) missing from CATEGORY_MAP in banner.sh:\n' \
    "${#missing[@]}" >&2
  for skill in "${missing[@]}"; do
    printf '  - %s\n' "$skill" >&2
  done
  printf '\nAdd these to CATEGORY_MAP in hooks/banner.sh, then re-run.\n' >&2
  exit 1
fi
