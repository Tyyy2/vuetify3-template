<template>
  <v-app>
    <v-app-bar flat border>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>iframe 測試頁面</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import SideMenu from "@/components/SideMenu";
import menus from "@/menus";
const drawer = ref(null);
const state = reactive({
  menus: [],
});

const opened = ref(["01"]);

onMounted(() => {
  state.menus = menus;
});
</script>
