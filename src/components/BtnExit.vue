<template>
  <v-icon v-bind="{ ...$attrs, onClick, icon }"></v-icon>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

//#region 裝置判斷
const TABLET_PATTERN = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i
const MOBILE_PATTETN =
  /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/
const getDevice = () => {
  const { userAgent } = navigator // 取得使用者裝置
  if (TABLET_PATTERN.test(userAgent)) return 'tablet' // 判斷平板
  if (MOBILE_PATTETN.test(userAgent)) return 'mobile' // 判斷手機
  return 'desktop' // 都不是的話就是桌面
}
const isDesktop = getDevice() === 'desktop' // 是否為桌機
//#endregion

// 決定 icon
const icon = isDesktop ? 'mdi-logout' : 'mdi-home'

//#region 點擊動作
const MEIP_URL = 'https://m-eip.ktgh.com.tw/MEIP_ServerHttps/' // 光田人網址
const goMeip = () => (window.location.href = MEIP_URL) // 回光田人
const onClick = !isDesktop ? goMeip : e => emit('click', e) // 決定點擊動作
//#endregion
</script>

<style scoped></style>
