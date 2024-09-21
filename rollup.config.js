import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "es" },
    { file: "dist/index.umd.js", format: "umd", name: "TWASDK" }
  ],
  plugins: [typescript(), terser()],
  external: ["axios", "dotenv"]
};
