<template>
  <div class="container1">
      <Category title="foods">
          <img src="https://cn.vuejs.org/images/logo.svg">
      </Category>
      <Category title="games">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      </Category>
      <Category title="films">
        <img src="https://editors.dexerto.com/wp-content/uploads/2021/12/14/league-of-legends-2022-patch-schedule-all-lol-season-12-updates-changes.jpg" alt="">
      </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue"


export default {
  name: "App",
  components:{Category},
  data() {
    return {
      foods:["hot pot","barbecue","lobster","steak"],
      games:["LOL","CF","Dota","Pubg"],
      films:["a","b","c","d"],
    }
  },
}
</script>

<style >
.container1{
  display: flex;
  justify-content: space-around;

}
img{
  width: 100%;
}
</style>