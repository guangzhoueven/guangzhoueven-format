import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";

import child_process from "child_process";
import path from "path";

const parentDir = path.resolve(__dirname, "..");

const getCommitHash = () => {
  try {
    return child_process.execSync("git rev-parse HEAD").toString().trim();
  } catch {
    return "unknown";
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), wasm()],
  define: {
    "import.meta.env.VITE_COMMIT_HASH": JSON.stringify(getCommitHash()),
  },
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      external: ["remark", "remark-directive", "remark-gfm", "remark-math", "remark-stringify", "pangu", "unist-util-visit"],
    },
  },
  resolve: {
    alias: {
      "@imkdown/lg-solution-formatter": path.resolve(__dirname, "./index.js"),
    },
  },
});
