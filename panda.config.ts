import { defineConfig } from "@pandacss/dev";
import { recipes } from "./theme/recipes";
import { keyframes } from "./theme/keyframe";

export default defineConfig({
  preflight: true,

  include: ["./**/*.{js,jsx,ts,tsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  exclude: ["node_modules"],

  theme: {
    recipes,
    keyframes,
  },
  jsxFramework: "react",
  jsxFactory: "panda",
  outdir: "styled-system",
});
