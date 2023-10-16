<template>
  <v-dialog v-model="dialog" v-bind="$attrs">
    <slot v-bind="{ Resolve }"></slot>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
let resolve = null;

const Resolve = (v) => {
  resolve(v);
  dialog.value = false;
};

const GetResult = async () => {
  dialog.value = true;
  return new Promise((res) => (resolve = res));
};
defineExpose({ GetResult, Resolve });
</script>

<style lang="scss" scoped></style>
