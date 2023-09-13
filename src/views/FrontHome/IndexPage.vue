<template>
  <v-container fluid class="fill-height align-start flex-column">
    <SectionQuery />
    <SectionDetail />
  </v-container>
</template>

<script setup>
import { computed, ref } from "vue";
import SectionQuery from "./SectionQuery.vue";
import SectionDetail from "./SectionDetail.vue";
</script>
