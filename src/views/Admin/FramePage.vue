<template>
  <iframe class="w-100 h-100" :src="url"></iframe>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
window.route = route;
console.log("route", route.fullPath, route);
const url = computed(() => {
  const { url } = route.params;
  return url || "";
});
</script>

<style lang="scss" scoped></style>
