<template>
  im App
  <!-- <v-model-view></v-model-view> -->
  <keep-alive-view></keep-alive-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vModelView from "./views/vModelView";
import keepAliveView from "./views/keepAliveView";

export default defineComponent({
  name: "App",
  components: {
    vModelView,
    keepAliveView,
  },
});
</script>
