<template>
  <v-container fluid class="fill-height align-start flex-column">
    <VCard class="mt-2 v-col">
      <v-row class="flex-column fill-height" no-gutters>
        <v-col>
          <VTable class="v-col">
            <thead>
              <tr>
                <th class="text-left">原始資料</th>
                <th class="text-left">目的</th>
                <th class="text-left">程式</th>
                <th class="text-left">結果</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in items" :key="idx">
                <td>{{ item.ori }}</td>
                <td>{{ item.fmt }}</td>
                <td>{{ item.exp }}</td>
                <td>{{ item.val }}</td>
              </tr>
            </tbody>
          </VTable>
        </v-col>
      </v-row>
    </VCard>
  </v-container>
</template>

<script setup>
import dayx from '@/utils/dayx'
import { computed } from 'vue'
window.dayx = dayx

const d = dayx('0330315 123338', 'YYYMMDD HHmmss')
const d2 = dayx('0330315', 'YYYMMSS')
const items = [
  {
    ori: '',
    fmt: 'dayx 物件(當下時間)',
    exp: 'dayx()',
    val: dayx(),
  },
  {
    ori: 'dte: "0330315"',
    fmt: 'dayx 物件',
    exp: 'dayx("0330315", "YYYMMDD")',
    val: d2,
  },
  {
    ori: 'dte: "0330315", tme: "123338"',
    fmt: 'dayx 物件',
    exp: 'dayx("0330315 123338", "YYYMMDD HHmmss")',
    val: d,
  },
  {
    ori: 'dayx物件 d',
    fmt: '民國YYY年MM月DD日 HH:mm:ss',
    exp: 'd.format("民國YYY年MM月DD日 HH:mm:ss")',
    val: d.format('民國YYY年MM月DD日 HH:mm:ss'),
  },
  {
    ori: 'dayx物件 d',
    fmt: '年齡',
    exp: 'd.age',
    val: d.age,
  },
]

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
