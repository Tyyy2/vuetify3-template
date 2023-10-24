<template>
  <router-view />
  <dialog-loading :model-value="appstore.loading"></dialog-loading>
</template>

<script setup>
import { onMounted } from "vue";
import { useAppStore } from "./store/app";
// import { useAuthStore } from "./store/auth";
import DialogLoading from "@/components/DialogLoading.vue";
const appstore = useAppStore();
// const authstore = useAuthStore();

appstore.addInitProcedure(() => {
  console.log("app init procedue 1");
});
appstore.addInitProcedure(() => {
  console.log("app init procedue 2");
});

onMounted(async () => {
  const loadingFlag = "app";
  appstore.AddLoading(loadingFlag);
  try {
    // authstore.Authentication(); // 取得驗證
    // authstore.RemoveKey(); // 移除 Key
    appstore.init(); // 初始化 app
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    appstore.RemoveLoading(loadingFlag);
  }
});
</script>
