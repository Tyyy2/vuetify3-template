<template>
  <v-app>
    <v-app-bar flat border density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!-- 這裡塞 Menu List、以 opened 預設打開的節點  -->
      <SideMenu :menus="menu.menus" :opened="opened"></SideMenu>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useMenuStore } from "@/store/menu";
const menu = useMenuStore();
const drawer = ref(null);
const opened = ref(["01"]);
</script>
