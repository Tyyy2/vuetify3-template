<template>
  <v-container fluid class="fill-height align-start flex-column">
    <VCard flat border class="w-100 px-3 py-2">
      <v-row no-gutters align="center">
        <v-col cols="12" md="6" lg="2">
          <VTextField
            label="請輸入"
            density="compact"
            hide-details
            variant="outlined"
          ></VTextField>
        </v-col>
        <v-col cols="12" md="6" lg="2" class="mt-1 mt-md-0">
          <VTextField
            label="請輸入"
            density="compact"
            hide-details
            variant="outlined"
          ></VTextField>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="6" lg="auto" class="mt-1 mt-lg-0">
          <VBtn variant="outlined">123</VBtn>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.a }}</td>
            <td>{{ item.b }}</td>
            <td>{{ item.c }}</td>
          </tr>
        </tbody>
      </VTable>
    </VCard>
  </v-container>
</template>

<script setup></script>
