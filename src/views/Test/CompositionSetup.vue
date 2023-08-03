<template>
  <div></div>
</template>

<script setup>
import { computed, ref } from "vue";

const users = ref(["Jane", "Mark", "Bob"]);
const usersList = computed(() => users.value.join(", "));
const addUser = (user) => users.value.push(user);
const removeUser = (username) =>
  users.value = users.value.filter((user) => user !== username);
</script>

<style lang="scss" scoped></style>
