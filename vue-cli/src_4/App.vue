<template>
  <div class="container1">
    <Category title="foods">
      <img src="https://cn.vuejs.org/images/logo.svg" slot="a" />
      <a href="https://www.google.com" slot="b">more foods</a>
    </Category>
    <Category title="games">
      <ul slot="a">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <template v-slot:b>
        <a href="https://www.google.com">单机游戏</a>
        <a href="https://www.google.com">网络游戏</a>
      </template> 
      <!-- <template slot="b">
        <a href="https://www.google.com">单机游戏</a>
        <a href="https://www.google.com">网络游戏</a>
      </template>  -->

      <!-- <div slot="b">

      </div> -->
      <!-- <a href="https://www.google.com" slot="b">单机游戏</a>
        <a href="https://www.google.com" slot="b">网络游戏</a> -->
    </Category>
    <Category title="films">
      <img
        src="https://editors.dexerto.com/wp-content/uploads/2021/12/14/league-of-legends-2022-patch-schedule-all-lol-season-12-updates-changes.jpg"
        alt=""
        slot="a"
      />
      <template slot="b">
        <a href="https://www.google.com">classic</a>
        <a href="https://www.google.com">hot</a>
        <a href="https://www.google.com">recommendation</a>                                                                                 
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["hot pot", "barbecue", "lobster", "steak"],
      games: ["LOL", "CF", "Dota", "Pubg"],
      films: ["a", "b", "c", "d"],
    };
  },
};
</script>

<style >
.container1,
a {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>