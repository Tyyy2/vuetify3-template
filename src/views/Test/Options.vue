<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Jane", "Mark", "Bob"],
    };
  },
  computed: {
    usersList() {
      return this.users.value.join(", ");
    },
  },
  methods: {
    addUser(user) {
      this.users.value.push(user);
    },
    removeUser(username) {
      users.value = users.value.filter((user) => user !== username);
    },
  },
};
</script>

<style lang="scss" scoped></style>
