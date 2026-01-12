/**
 * day 12 - project tooling
 *
 * this repo is intentionally lightweight.
 * the goal is to learn concepts, not fight tooling.
 */

/**
 * why you need a local server
 *
 * many browser features are blocked on file:// for security reasons:
 * - ES module imports (type="module")
 * - fetch() (often blocked)
 * - some texture loading rules
 *
 * so even a "simple" three js demo usually needs http://localhost.
 */

/**
 * minimal run commands (no python)
 *
 * from repo root:
 * - npx serve days/day-009/demo
 * - npx http-server days/day-009/demo
 *
 * both start a static server.
 */

/**
 * recommended workflow
 *
 * 1) start a server in one terminal
 * 2) edit files
 * 3) reload browser
 *
 * note: no hot reload here (yet).
 */

/**
 * repo conventions (suggested)
 *
 * - each day gets a folder: days/day-XYZ
 * - notes live as .js files with comments (not necessarily runnable)
 * - runnable demos go in: days/day-XYZ/demo
 *   - index.html
 *   - main.js
 */
