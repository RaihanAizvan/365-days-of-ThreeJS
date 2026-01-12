import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function findDemoHtmlInputs(rootDir) {
  /**
   * Vite multi-page setup.
   *
   * We treat every `days/day-XYZ/demo/index.html` as a separate entry.
   * This keeps the repo structure "one demo per day".
   */
  const inputs = {}

  const daysDir = path.join(rootDir, 'days')
  if (!fs.existsSync(daysDir)) return inputs

  for (const dayFolder of fs.readdirSync(daysDir)) {
    const demoIndex = path.join(daysDir, dayFolder, 'demo', 'index.html')
    if (!fs.existsSync(demoIndex)) continue

    // key becomes output html name (e.g. day-009-demo.html)
    const key = `${dayFolder}-demo`
    inputs[key] = demoIndex
  }

  return inputs
}

export default defineConfig(({ command }) => {
  const rootDir = process.cwd()

  return {
    // repo root is the Vite root; demos are in subfolders
    root: rootDir,

    server: {
      open: false
    },

    build: {
      rollupOptions: {
        input: {
          // ensure root index exists even if we don't have one (vite will still build inputs)
          ...findDemoHtmlInputs(rootDir)
        }
      },
      outDir: path.join(rootDir, 'dist'),
      emptyOutDir: true
    },

    // for relative assets when opening dist via a static server
    base: './'
  }
})
