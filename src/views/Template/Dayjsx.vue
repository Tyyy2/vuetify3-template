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
</script>

<style lang="scss" scoped></style>
