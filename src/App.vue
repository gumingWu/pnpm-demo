<template>
  im App
  <!-- <v-model-view></v-model-view> -->
  <intersection-observer-vue></intersection-observer-vue>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vModelView from "./views/vModelView";
import keepAliveView from "./views/keepAliveView";
import IntersectionObserverVue from "./views/observerView/IntersectionObserver.vue";

export default defineComponent({
  name: "App",
  components: {
    vModelView,
    keepAliveView,
    IntersectionObserverVue,
  },
});
</script>
