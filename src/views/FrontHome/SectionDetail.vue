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
            <tr v-for="item in items" :key="item.name">
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
<<<<<<< HEAD
import { ref, computed } from "vue";
import { useFronthomeStore } from "./store";
import { useMenuStore } from "@/store/menu";

// page store
const store = useFronthomeStore();
window.frontStore = store;
const menusStore = useMenuStore();
window.menusStore = menusStore;

// state
const items = computed(() => []);

//#region pagination
// pagination reactivity state
const page = ref(1);
// pagination none reactivity state
=======
import { computed, ref } from 'vue'
// state
const page = ref(1)
>>>>>>> a6d500e147701bc4c0c6d0554271feade9ca70f5
const paginationConfig = {
  // config
  length: 15,
  totalVisible: 7,
  density: 'compact',
  'onUpdate:modelValue': next => {
    // do something
    page.value = next
  },
<<<<<<< HEAD
};
// pagination computed total state
const pagination = computed(() => ({ page: page.value, ...paginationConfig }));
//#endregion
=======
}
// bind = state + config
const pagination = computed(() => ({ page: page.value, ...paginationConfig }))
>>>>>>> a6d500e147701bc4c0c6d0554271feade9ca70f5
</script>

<style lang="scss" scoped></style>
