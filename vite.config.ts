import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import unplugin from "vue-setup-name-plugin";
import rollupPluginVisualizer from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    vuePlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    unplugin.vite(),
    rollupPluginVisualizer(),
  ],
});
