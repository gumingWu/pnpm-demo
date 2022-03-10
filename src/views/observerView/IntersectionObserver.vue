<template>
  <div>
    <img
      src="../../assets/img/intersection.jpg"
      alt="intersecion测试"
      style="width: 100px; height: 100px"
    />
    <img
      src=""
      ref="img"
      dataSrc="https://img2.baidu.com/it/u=3947572783,1476163811&fm=26&fmt=auto&gp=0.jpg?random=3"
      alt="hhh"
      style="width: 100px; height: 100px; position: relative; top: 800px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const img = ref<Element | null>(null);

onMounted(() => {
  const intersection = new IntersectionObserver(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          const { dataSrc } = item.target.attributes;
          const textContent = dataSrc.textContent;
          console.log(textContent);

          item.target.setAttribute("src", textContent);
        } else {
          item.target.setAttribute("src", ""); // 离开可视区域，就消失，不知道有没有性能影响
        }
      });
    },
    {
      threshold: [0.5], // 当元素的可视范围达到一半，触发回调，只能输入0-1范围的数
    }
  );
  intersection.observe(img.value!);
});
</script>
