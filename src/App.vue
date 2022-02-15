<template>
  im App
  <v-model-view></v-model-view>
</template>

<script>
import { defineComponent } from "vue";
import vModelView from "./views/vModelView";

export default defineComponent({
  name: "App",
  components: {
    vModelView,
  },
});
</script>
