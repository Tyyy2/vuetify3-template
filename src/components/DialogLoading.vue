<template>
  <v-dialog v-model="dialog">
    <v-card class="mx-auto" color="primary" variant="elevated" width="300" height="70">
      <v-card-item class="text-center"> {{ text }} </v-card-item>
      <v-card-item>
        <v-progress-linear indeterminate color="white"></v-progress-linear>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "請稍候",
  },
});
const emits = defineEmits(["update:modelValue"]);

const dialog = computed({
  get: () => props.modelValue,
  set: (e) => emits("update:modelValue", e),
});
</script>

<style scoped></style>
