<template>
  <v-model-demo v-model:modelA="modelA" v-model:modelB="modelB"></v-model-demo>
  <button @click="addA">+</button>
  <button @click="subA">-</button>
  <div>modelA: {{ modelA }}</div>
  <div>modelB: {{ modelB }}</div>
</template>

<script setup lang="ts">
import vModelDemo from "../../../components/vModelDemo";
import { ref } from "vue";
let modelA = ref(0);
let modelB = ref("");

const addA = () => {
  modelA.value++;
  console.log(modelA.value);
};
const subA = () => {
  modelA.value--;
};

const addB = () => {
  modelB.value += "a";
};
const subB = () => {
  modelB.value += "b";
};
</script>
