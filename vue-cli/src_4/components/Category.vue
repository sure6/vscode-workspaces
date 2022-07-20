<template>
  <div class="category">
    <h3>{{ title }}</h3>
      <!-- 定义一个插槽  等着组件的使用者进行填充-->
      <slot name="a"> 我是默认值,当使用者没有传递具体结构时,我会出现</slot>
      <slot name="b"> 我是默认值,当使用者没有传递具体结构时,我会出现</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
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