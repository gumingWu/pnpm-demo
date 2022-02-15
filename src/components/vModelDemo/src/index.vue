<template>
  <div class="demo">
    <div>{{ modelA }}</div>
    <input
      type="number"
      :value="modelA"
      @input="emits('update:modelA', parseInt($event.target.value))"
    />
    <div>{{ modelB }}</div>
    <input
      type="text"
      :value="modelB"
      @input="emits('update:modelB', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelA: {
    type: Number,
    default: 12,
  },
  modelB: {
    type: String,
    default: "11",
  },
});

const emits = defineEmits(["update:modelA", "update:modelB"]);
</script>

<style scoped>
.demo {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
