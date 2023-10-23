<template>
  <iframe ref="holder" class="w-100 h-100 d-block" style="overflow: hidden"></iframe>
  <iframe :style="displayerStyle" :src="modelValue || ''"></iframe>
  <!-- sandbox="allow-same-origin allow-scripts allow-top-navigation" -->
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import _ from "lodash";

const props = defineProps({
  virtualWidth: 1920,
  modelValue: {
    type: String,
    default: null,
  },
});
defineEmits(["update:modelValue"]);

const holder = ref(null);
const holderHeight = ref(0);
const holderWidth = ref(0);
const top = ref(0);
const left = ref(0);
const resizeHandler = _.throttle(() => {
  console.log("resizeHandler");
  const h = holder.value?.clientHeight;
  const w = holder.value?.clientWidth;
  holderWidth.value = w ?? 0;
  holderHeight.value = h ?? 0;
  const position = holder.value?.getBoundingClientRect();
  top.value = position?.top ?? 0;
  left.value = position?.left ?? 0;
}, 350);

onMounted(() => resizeHandler());
onMounted(() => holder.value.contentWindow.addEventListener("resize", resizeHandler));
onUnmounted(() =>
  holder.value?.contentWindow.removeEventListener("resize", resizeHandler)
);
// 原始寬度 985px 可以塞得下 frame content
const displayerStyle = computed(() => {
  const { virtualWidth } = props;
  const scale = ((holderWidth.value ?? virtualWidth) / virtualWidth).toFixed(3);
  const height = (holderHeight.value / parseFloat(scale)).toFixed(2);
  return {
    border: "1px solid grey",
    position: "fixed",
    top: top.value + "px",
    left: left.value + "px",
    width: `${virtualWidth}px !important`,
    height: height + "px !important",
    // "background-color": "green",
    "transform-origin": "left top",
    transform: `scale(${scale}, ${scale})`,
  };
});
</script>

<style scoped></style>
