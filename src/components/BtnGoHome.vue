<template>
  <v-icon v-if="!isDesktop" v-bind="$attrs" icon="mdi-home" @click="goHome()"></v-icon>
</template>

<script setup lang="ts">
import { computed } from "vue";

// 回光田人
const HOME_URL = "https://m-eip.ktgh.com.tw/MEIP_ServerHttps/"; // 光田人網址
const goHome = () => (window.location.href = HOME_URL);

// 裝置判斷邏輯
const TABLET_PATTERN = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i;
const MOBILE_PATTETN = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;
const getDevice = () => {
  const { userAgent } = navigator;
  if (TABLET_PATTERN.test(userAgent)) return "tablet"; // 判斷平板
  if (MOBILE_PATTETN.test(userAgent)) return "mobile"; // 判斷手機
  return "desktop"; // 都不是的話就是桌面
};

// 判斷是否為桌機
const isDesktop = computed(() => getDevice() === "desktop"); // 是否為桌機
</script>

<style scoped></style>
