<template>
  <div class="container1">

    <Category title="games">
      <template scope="uow">
        {{uow}}
        <ul>
          <li v-for="(g, index) in game" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <!-- <Category title="games">
      <ul>
        <li v-for="(g, index) in game" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="games">
      <ul>
        <li v-for="(g, index) in game" :key="index">{{ g }}</li>
      </ul>
    </Category> -->
   
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  
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