import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

/** @param {boolean=} includeNodeGlobals */
const extendsDedupe = (includeNodeGlobals) => ({
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    ecmaVersion: 2020,
    globals: includeNodeGlobals ? { ...globals.browser, ...globals.node } : globals.browser,
  },
})

const ignoredFiles = [
  "dist",
  "node_modules",
  "pnpm-lock.yaml"
]

const globalRules = {
  "prefer-const": "warn",
  "no-var": "error",
  "no-console": "warn",
  "no-else-return": ["error", { allowElseIf: false }],
  "no-use-before-define": "off",
  "no-duplicate-imports": "warn",

  // TypeScript rules
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/no-unused-vars": "warn",
  "@typescript-eslint/member-delimiter-style": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
}

export default tseslint.config(
  { ignores: ignoredFiles },
  {
    files: ["**/*.ts"],
    ...extendsDedupe(true),
    rules: globalRules,
  },
  // Rules for `@auburn-react`
  {
    files: ["packages/@auburn-react/**/*.tsx"],
    ...extendsDedupe(),
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...globalRules,
      ...reactHooks.configs.recommended.rules,

      "react/no-unescaped-entities": "off"
    }
  }
)