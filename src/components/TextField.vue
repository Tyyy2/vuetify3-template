<template>
  <v-text-field
    class="elevation-0"
    variant="outlined"
    single-line
    hide-details
    density="compact"
    v-bind="$attrs"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-text-field>
</template>

<script setup></script>

<style lang="scss" scoped></style>
