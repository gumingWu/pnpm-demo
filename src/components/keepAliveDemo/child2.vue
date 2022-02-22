<template>
  child2
  <input type="text" v-model="val" />
</template>

<script setup lang="ts" name="child2">
import { ref } from "vue";

const val = ref("");
</script>
