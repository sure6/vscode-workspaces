<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :game="games" msg="hello"> 我是默认值,当使用者没有传递具体结构时,我会出现</slot>
    <slot name="a" :game="games" msg="hello"> 我是默认值,当使用者没有传递具体结构时,我会出现</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["LOL", "CF", "Dota", "Pubg"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>