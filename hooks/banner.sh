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

# ── ANSI 256-color palette ──────────────────────────────────────────
# Diamond corners + accent (mid indigo)
CORNER=$'\033[1;38;5;141m'
RESET=$'\033[0m'

# Text tones
ACCENT=$'\033[1;38;5;141m'        # wordmark (mid indigo, bold)
HEAVY=$'\033[1;38;5;255m'          # thesis (bright white, bold)
QUIET=$'\033[38;5;249m'            # question (quiet gray)
SEP=$'\033[38;5;238m'              # category separator (dark gray)

# Per-category color tones (indigo palette)
C_FOUNDATION=$'\033[38;5;189m'     # lightest indigo
C_STRATEGY=$'\033[38;5;141m'       # mid indigo
C_EXPERIENCE=$'\033[38;5;147m'     # warm indigo
C_QUALITY=$'\033[38;5;183m'        # light indigo
C_ADAPTATION=$'\033[38;5;104m'     # cool indigo
C_MEASUREMENT=$'\033[38;5;189m'    # lightest (matches Foundation)
C_CROSSCUTTING=$'\033[38;5;183m'   # light (matches Quality)
C_HANDOFF=$'\033[38;5;99m'         # deep indigo
C_ORPHAN=$'\033[38;5;250m'         # neutral for unmapped skills

# ── Canonical category map ──────────────────────────────────────────
# Mirrors docs/src/lib/skills.ts — keep in sync.
# Format: "skill_slug:category_key"
CATEGORY_MAP=(
  "intent:foundation"
  "strategize:strategy"
  "investigate:strategy"
  "blueprint:strategy"
  "journey:experience"
  "organize:experience"
  "articulate:experience"
  "evaluate:quality"
  "fortify:quality"
  "include:quality"
  "transpose:adaptation"
  "localize:adaptation"
  "measure:measurement"
  "philosopher:crosscutting"
  "storytelling:crosscutting"
  "specify:handoff"
)

# Order categories appear in the frame (left to right).
CATEGORY_ORDER=(foundation strategy experience quality adaptation measurement crosscutting handoff)

# ── Helpers ─────────────────────────────────────────────────────────
get_category() {
  local skill="$1"
  for mapping in "${CATEGORY_MAP[@]}"; do
    if [[ "${mapping%%:*}" == "$skill" ]]; then
      echo "${mapping##*:}"
      return
    fi
  done
  echo "orphan"
}

get_color() {
  case "$1" in
    foundation)    printf '%s' "$C_FOUNDATION" ;;
    strategy)      printf '%s' "$C_STRATEGY" ;;
    experience)    printf '%s' "$C_EXPERIENCE" ;;
    quality)       printf '%s' "$C_QUALITY" ;;
    adaptation)    printf '%s' "$C_ADAPTATION" ;;
    measurement)   printf '%s' "$C_MEASUREMENT" ;;
    crosscutting)  printf '%s' "$C_CROSSCUTTING" ;;
    handoff)       printf '%s' "$C_HANDOFF" ;;
    *)             printf '%s' "$C_ORPHAN" ;;
  esac
}

# (Frame builder and banner output in subsequent tasks.)

# Temporary smoke test (removed in Task 3).
echo "Category for 'intent' is: $(get_category intent)"
echo "Category for 'investigate' is: $(get_category investigate)"
echo "Category for 'fakeskill' is: $(get_category fakeskill)"
