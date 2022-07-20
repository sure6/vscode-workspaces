<template>
  <div class="container1">
    <Category title="games">
      <template scope="uow" slot="a">
        <ul>
          <li v-for="(g, index) in uow.game" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="games">
      <template scope="uow">
        <ol>
          <li v-for="(g, index) in uow.game" :key="index">{{ g }}</li>
        </ol>
        <h4>{{ uow.msg }}</h4>
      </template>
    </Category>

    <Category title="games">
      <template slot-scope="uow">
        <h4 v-for="(g, index) in uow.game" :key="index">{{ g }}</h4>
      </template>
    </Category>
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