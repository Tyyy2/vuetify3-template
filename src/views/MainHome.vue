<template>
  <v-container fluid class="fill-height align-start flex-column">
    <VCard flat border class="w-100 px-3 py-2">
      <v-row align="center" dense>
        <v-col cols="12" md="6" lg="2">
          <VTextField
            label="病歷號"
            density="compact"
            hide-details
            variant="outlined"
          ></VTextField>
        </v-col>
        <v-col cols="12" md="6" lg="2">
          <VTextField
            label="身分證號"
            density="compact"
            hide-details
            variant="outlined"
          ></VTextField>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="6" lg="auto">
          <VBtn block color="grey" variant="outlined">搜尋</VBtn>
        </v-col>
        <v-col cols="12" md="6" lg="auto">
          <VBtn block color="grey" variant="outlined">新增</VBtn>
        </v-col>
      </v-row>
    </VCard>
    <VCard flat border class="mt-1 v-col">
      <VTable>
        <thead>
          <tr>
            <th class="text-left">項目1</th>
            <th class="text-left">項目2</th>
            <th class="text-left">項目3</th>
            <th class="text-left">動作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.a }}</td>
            <td>{{ item.b }}</td>
            <td>{{ item.c }}</td>
            <td>xxx</td>
          </tr>
        </tbody>
      </VTable>
    </VCard>
  </v-container>
</template>

<script setup></script>
