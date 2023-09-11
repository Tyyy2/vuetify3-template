<template>
  <v-table>
    <tbody>
      <tr>
        <td>{{ format1 }}</td>
        <td>{{ value1 }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import dayx from "@/utils/dayx";
import { computed } from "vue";

const format1 = "民國YYY年MM月DD日 HH:mm:ss";
const value1 = computed(() => {
  let d = dayx();
  d.dte = "330315";
  d.tme = "123338";
  return d.format(format1);
});
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

<style lang="scss" scoped></style>
