<template>
  <div></div>
  <component is="VListItem">
    <VListGroup></VListGroup>
  </component>
</template>

<script setup>
import SideMenu from "./SideMenu.vue";
defineProps({
  menus: { type: Array, default: [] },
  depth: { type: Number, default: 0 },
  opened: { type: Array, default: [] },
});
</script>

<style lang="scss" scoped></style>
