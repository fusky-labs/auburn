import { defineConfig } from "vite"
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      name: "AuburnElemCore",
      entry: {
        'base-element': resolve(__dirname, "src/base-element.ts"),
        'window/window-skeleton': resolve(__dirname, "src/windows/auburn-base-window.ts"),
        'window/file-explorer': resolve(__dirname, "src/windows/auburn-file-explorer.ts"),
      },
      formats: ["es", "cjs"],
    },
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       "lit": ["lit"]
    //     }
    //   }
    // }
  }
})