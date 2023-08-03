<template>
  <div>
    <v-btn v-bind="$attrs">
      <template v-for="(slot, index) of Object.keys($slots)" :key="index" v-slot:[slot]>
        <slot :name="slot"></slot>
      </template>
    </v-btn>
  </div>
</template>

<script setup></script>
