<template>
  <div></div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const useUserList = () => {
      const users = ref(["Jane", "Mark", "Bob"]);
      const usersList = computed(() => users.value.join(", "));
      const addUser = (user) => users.value.push(user);
      const removeUser = (username) =>
        (users.value = users.value.filter((user) => user !== username));

      return {
        users,
        usersList,
        addUser,
        removeUser,
      };
    };
  },
};
</script>

<style lang="scss" scoped></style>
