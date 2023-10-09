<template>
  <v-icon v-bind="{ ...$attrs, onClick, icon }"></v-icon>
</template>

<script setup lang="ts">
const HOME_URL = 'https://m-eip.ktgh.com.tw/MEIP_ServerHttps/' // 光田人網址
const emit = defineEmits(['click'])

// 裝置判斷邏輯
const TABLET_PATTERN = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i
const MOBILE_PATTETN =
  /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/
const getDevice = () => {
  const { userAgent } = navigator
  if (TABLET_PATTERN.test(userAgent)) return 'tablet' // 判斷平板
  if (MOBILE_PATTETN.test(userAgent)) return 'mobile' // 判斷手機
  return 'desktop' // 都不是的話就是桌面
}

// 判斷是否為桌機
const isDesktop = getDevice() === 'desktop' // 是否為桌機
const icon = isDesktop ? 'mdi-logout' : 'mdi-home'
const onClick = !isDesktop
  ? () => (window.location.href = HOME_URL) // 回光田人
  : e => emit('click', e) // 丟出 click 事件
</script>

<style scoped></style>
