<template>
  <VCard flat border class="w-100 px-3 py-2">
    <v-row align="center" dense>
      <v-col cols="12" md="6" lg="2">
        <VTextField label="病歷號"></VTextField>
      </v-col>
      <v-col cols="12" md="6" lg="2">
        <VTextField label="身分證號"></VTextField>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" lg="auto">
        <VBtn block color="grey">搜尋</VBtn>
      </v-col>
      <v-col cols="12" md="6" lg="auto">
        <VBtn block color="grey">新增</VBtn>
      </v-col>
    </v-row>
  </VCard>
</template>

<script setup></script>

<style lang="scss" scoped></style>
