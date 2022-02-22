<template>
  <label><input type="radio" v-model="cpn" :value="child1" /> 有缓存</label>
  <label><input type="radio" v-model="cpn" :value="child2" /> 无缓存</label>

  <div>
    <KeepAlive :include="['hhh']">
      <component :is="cpn"></component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import child1 from "../../../components/keepAliveDemo/child1.vue";
import child2 from "../../../components/keepAliveDemo/child2.vue";
const cpn = shallowRef(child1);
</script>
