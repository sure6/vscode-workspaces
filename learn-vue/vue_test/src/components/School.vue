<template>
  <div>
    <h1 @click="showName">School name : {{ name }}</h1>
    <h1>School address : {{ address }}</h1>
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
// 组件交互相关的代码(数据, 方法等等)
export default {
  name: "School",
  data() {
    return {
      msg:"欢迎来到vue",
      name:"UOW",
      address:"11 Northfields",
    };
  },
  // mixins:[mixin,mixin2],
  // mounted() {
  //   console.log(999)
  // },
 
};
</script>
