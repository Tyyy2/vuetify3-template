<template>
  <VCard class="mt-2 v-col">
    <v-row class="flex-column fill-height" no-gutters>
      <v-col>
        <VTable class="v-col">
          <thead>
            <tr>
              <th class="text-left">項目0</th>
              <th class="text-left">項目1</th>
              <th class="text-left">項目2</th>
              <th class="text-left">動作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </VTable>
      </v-col>
      <v-col cols="auto">
        <v-pagination v-bind="pagination"></v-pagination>
      </v-col>
    </v-row>
  </VCard>
</template>

<script setup>
import { computed, ref } from 'vue'
// state
const page = ref(1)
const paginationConfig = {
  // config
  length: 15,
  totalVisible: 7,
  density: 'compact',
  'onUpdate:modelValue': next => {
    // do something
    page.value = next
  },
}
// bind = state + config
const pagination = computed(() => ({ page: page.value, ...paginationConfig }))
</script>

<style lang="scss" scoped></style>
