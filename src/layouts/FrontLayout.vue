<template>
  <v-app>
    <v-app-bar flat border density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
      <v-spacer></v-spacer>
      <BtnExit class="me-3" @click="auth.Logout()"></BtnExit>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!-- 這裡塞 Menu List、以 opened 預設打開的節點  -->
      <SideMenu :menus="menu.menuTree" :opened="opened"></SideMenu>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMenuStore } from "@/store/menu";
import { useAppStore } from "@/store/app";
import { useAuthStore } from "@/store/auth";

const drawer = ref(null);
const opened = ref([]);

const menu = useMenuStore();
const app = useAppStore();
const auth = useAuthStore();

//#region FrontLayout initialization logic
const init = async () => {
  await menu.GetMenus();
};
onMounted(async () => {
  if (app.inited) return await init();
  app.addInitProcedure(menu.GetMenus());
});
//#endregion
</script>
