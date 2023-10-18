<template>
  <VCard class="mt-2 w-100">
    <VTable>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">項目</th>
          <th class="text-left">icon</th>
          <th class="text-left">種類</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td><v-icon size="small" :icon="item.prepend"></v-icon></td>
          <td>{{ URL_TYPE.get(item.type) || "-" }}</td>
        </tr>
      </tbody>
    </VTable>
    <v-row no-gutters align-center>
      <v-col></v-col>
      <v-col cols="auto">
        <v-select
          v-model="rowsPerPage"
          :items="rowsPerPageOptions"
          variant="solo"
          flat
        ></v-select>
      </v-col>
      <v-col cols="auto">
        <v-pagination v-bind="pagination"></v-pagination>
      </v-col>
    </v-row>
  </VCard>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { MENUS, URL_TYPE } from "@/menu";

//#region pagination
// pagination reactivity state
const page = ref(1); // now page
const rowsPerPage = ref(10); // rows per page
const rowsPerPageOptions = [5, 10, 15]; // rows per page options
// pagination computed total state
const pagination = computed(() => ({
  // length of pagination item
  length: Math.ceil(total.value / rowsPerPage.value),
  // value and event binding of pagination modelValue
  modelValue: page.value,
  "onUpdate:modelValue": (next) => (page.value = next),
}));
// pagination to first page when rowsPerPage changes
watch(
  () => rowsPerPage.value,
  () => (page.value = 1)
);

// item
const total = computed(() => MENUS.length);
const items = computed(() => {
  const start = (page.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return MENUS.slice(start, end);
});
</script>

<style lang="scss" scoped>
tr:hover {
  background-color: #eeeeee;
  cursor: pointer;
}
</style>
