import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
    {
    ignores: [
      "register-hooks.js",
      "**/node_modules/**/*",
    ],
    rules: {
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-semi": "off",
      "@typescript-eslint/semi": "off",
      "react/no-unescaped-entities": "off",
      "no-sparse-arrays": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",

      quotes: ["error", "double"],
      semi: ["error", "always"],
      "func-style": ["error", "expression"],
    },
  }
];
