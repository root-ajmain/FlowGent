import { defineConfig } from "eslint/config";

export default defineConfig([{
    languageOptions: {
        parserOptions: {
            ecmaFeatures: { jsx: true },
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    rules: {},
}]);
