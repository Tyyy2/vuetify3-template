<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
// import dayx from "../src/utils/dayx";
import { useAppStore } from "./store/app";
import { useAuthStore } from "./store/auth";

const appstore = useAppStore();
const authstore = useAuthStore();

appstore.addInitProcedure(() => {
  console.log("app init procedue 1");
});
appstore.addInitProcedure(() => {
  console.log("app init procedue 2");
});

onMounted(async () => {
  const loadingHolder = "app";
  appstore.AddLoading(loadingHolder);
  try {
    authstore.Authentication(); // 取得驗證
    appstore.init(); // 初始化 app
    removeParameter("Key");
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    appstore.RemoveLoading(loadingHolder);
  }
});

// JavaScript function to remove the specified parameter from the URL
function removeParameter(paramName) {
  // Get the current URL
  var url = window.location.href;

  // Split the URL at '?' to separate the base URL and the query parameters
  var urlParts = url.split("?");

  // Check if there are query parameters in the URL
  if (urlParts.length > 1) {
    // Get the query parameters string after '?'
    var queryParams = urlParts[1];

    // Split the query parameters into individual parameters
    var paramsArray = queryParams.split("&");

    // Create a new array to store the updated parameters
    var updatedParams = [];

    // Loop through each parameter to check if it matches the one to remove
    for (var i = 0; i < paramsArray.length; i++) {
      var param = paramsArray[i].split("=");
      var paramNameInURL = param[0];

      // Add the parameter to the updatedParams array if it's not the one to remove
      if (paramNameInURL !== paramName) {
        updatedParams.push(paramsArray[i]);
      }
    }

    // Rebuild the URL without the parameter to remove
    var updatedURL =
      urlParts[0] + (updatedParams.length > 0 ? "?" + updatedParams.join("&") : "");

    // Replace the current URL with the updated one
    window.history.replaceState({}, document.title, updatedURL);
  }
}

// function dateUsage() {
//   //#region 從資料庫的 dte, tme 欄位
//   let d = dayx();
//   d.dte = "330315";
//   d.tme = "123338";
//   console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // 民國110年03月15日 12:33:38
//   //#endregion

//   // //#region 從原生 Date
//   // d = dayx("2022-03-15T12:33:38");
//   // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // // 民國110年03月15日 12:33:38
//   // //#endregion

//   // //#region 使用當下時間不需要任何參數
//   // d = dayx();
//   // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // //#endregion
// }
// window.day = dayx;
</script>
