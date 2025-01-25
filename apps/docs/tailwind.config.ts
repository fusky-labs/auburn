import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  experimental: {
    optimizeUniversalDefaults: true
  },
  darkMode: ["variant", [
    "html.dark &",
    "@media (prefers-color-scheme: dark) { & }"
  ]],

  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: [typography, forms]
} satisfies Config
