<template>
  <PromisDialog ref="dialog" v-slot="{ Resolve }" :width="500">
    <v-card>
      <v-card-text>
        <v-text-field label="輸入框" v-model="msg"></v-text-field>
        <v-btn @click="Resolve(msg)">Resolve</v-btn>
      </v-card-text>
    </v-card>
  </PromisDialog>
</template>

<script setup>
import PromisDialog from "@/components/PromisDialog.vue";
import { ref } from "vue";
const dialog = ref(null);
const msg = ref("");
const test = async () => {
  var a = await dialog.value?.GetResult();
  console.log(a);
};
window.test = test;
</script>

<style lang="scss" scoped></style>
