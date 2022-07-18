<template>
  <div class="school">
    <h1>school name : {{ name }}</h1>
    <h1>school address : {{ address }}</h1>
    <button @click="popUp">点我弹框</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据, 方法等等)
export default {
  name: "School",
  data() {
    return {
      name: "UOW",
      address: "11 Northfieds Ave.",
    };
  },
  methods: {
    popUp() {
      alert(1);
      console.log(this);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.school {
  background-color: skyblue;
}
</style>