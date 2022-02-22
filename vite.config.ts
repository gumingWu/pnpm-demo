import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { vitePlugin } from "vue-setup-name-plugin";
// const vitePlugin = require("vue-setup-name-plugin");

export default defineConfig({
  plugins: [
    vuePlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vitePlugin(),
  ],
});
