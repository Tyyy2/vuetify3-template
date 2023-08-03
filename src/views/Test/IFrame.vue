<template>
  <v-row class="fill-height">
    <v-col>
      <v-text-field
        label="網址"
        hide-details
        v-model="src"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col>
      <iframe
        :src="src"
        class="w-100 h-100"
        sandbox="allow-same-origin allow-scripts allow-top-navigation"
      ></iframe>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

let src = ref("");
</script>

<style lang="scss" scoped></style>
