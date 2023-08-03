<template>
  <div class="pa-3">
    <v-card border flat>
      <v-card-text>
        <v-row dense>
          <v-col cols="3">
            <text-field label="病歷號" :disabled="loading"></text-field>
          </v-col>
          <v-col cols="3">
            <text-field label="姓名" :disabled="loading"></text-field>
          </v-col>
          <v-col cols="3"> 日期起 </v-col>
          <v-col cols="3"> 日期迄 </v-col>
          <v-col cols="3"> 清空/搜尋 </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
// import TextField from "@/components/MyInput.vue";
import { ref } from "vue";
var loading = ref(false);
</script>
