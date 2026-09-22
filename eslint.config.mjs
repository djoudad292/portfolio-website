import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next.configs.recommended,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      ".netlify/**",
      "public/**",
      "styles/**",
      "*.png",
      "*.jpg",
      "*.jpeg",
      "*.gif",
      "*.svg",
      "*.mp4",
      "*.pdf",
    ],
  },
);
