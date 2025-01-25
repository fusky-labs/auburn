// @ts-check
import { defineConfig, passthroughImageService } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import mdx from "@astrojs/mdx"

import autoprefixer from "autoprefixer"

export default defineConfig({
  integrations: [sitemap(), svelte(), tailwind(), mdx()],
  prefetch: {
    prefetchAll: true
  },
  // alternative to postcss.config.js to inject `autoprefixer`
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer({})]
      }
    }
  },
  // Image optimization
  image: {
    service: passthroughImageService()
  }
})