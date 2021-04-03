import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      views: path.resolve(__dirname, "src/views"),
    },
  },

  plugins: [vue()],

  server: {
    open: true,

    port: 6060,
    // Load proxy configuration from .env
    // proxy: createProxy(VITE_PROXY),
    proxy: {
      "/api": {
        target: "https://xxx.xx.xx/xxx",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },

    hmr: {
      overlay: true,
    },
  },
});
