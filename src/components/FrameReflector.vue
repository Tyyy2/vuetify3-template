<template>
  <iframe ref="holder" class="w-100 h-100 d-block" style="overflow: hidden"></iframe>
  <iframe :style="(displayerStyle as any)" :src="modelValue || ''"></iframe>
  <!-- sandbox="allow-same-origin allow-scripts allow-top-navigation" -->
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

type Props = {
  modelValue: string | null;
  virtualWidth: number;
};
const props = withDefaults(defineProps<Props>(), {
  virtualWidth: 1920,
});
defineEmits(["update:modelValue"]);

const holder = ref<HTMLIFrameElement | null>(null);
const holderHeight = ref<number>(0);
const holderWidth = ref<number>(0);
const top = ref<number>(0);
const left = ref<number>(0);
const resizeHandler = () => {
  const h = holder.value?.clientHeight;
  const w = holder.value?.clientWidth;
  holderWidth.value = w ?? 0;
  holderHeight.value = h ?? 0;
  const position = holder.value?.getBoundingClientRect();
  top.value = position?.top ?? 0;
  left.value = position?.left ?? 0;
};

onMounted(() => resizeHandler());
onMounted(() => holder.value.contentWindow.addEventListener("resize", resizeHandler));
onUnmounted(() =>
  holder.value.contentWindow.removeEventListener("resize", resizeHandler)
);
// 原始寬度 985px 可以塞得下 frame content
const displayerStyle = computed(() => {
  const { virtualWidth } = props;
  const scale: string = ((holderWidth.value ?? virtualWidth) / virtualWidth).toFixed(3);
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
