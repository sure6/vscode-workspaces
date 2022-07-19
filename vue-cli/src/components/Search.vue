<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => {
          // console.log("请求成功了", response.data.items);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errorMsg: "",
            users:response.data.items
          });
        },
        (error) => {
          // console.log("请求失败了", error.message);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errorMsg: error.message,
            users:[]
          });
        }
      );
    },
  },
};
</script>

<style scoped>
</style>