<template>
  <iframe class="w-100 h-100" :src="url"></iframe>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const url = computed(() => {
  // const route = useRoute()
  const { url } = route.params
  return url || ''
})
onMounted(() => {
  // const route = router.currentRoute.value
  console.log(route)
  console.log(router.currentRoute.value)
  // const url = route.params.url
  // console.log(route.params, url)
})
</script>

<style lang="scss" scoped></style>
