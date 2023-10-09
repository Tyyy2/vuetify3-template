<template>
  <!-- 直接綁定 virtual-width 讓 iframe 裡面的網頁以該寬度檢視 -->
  <FrameReflector
    modelValue="https://www.ktgh.com.tw/Default.asp"
    :virtual-width="1100"
  ></FrameReflector>
</template>

<script setup>
import FrameReflector from '@/components/FrameReflector.vue'
</script>

<style lang="scss" scoped></style>
