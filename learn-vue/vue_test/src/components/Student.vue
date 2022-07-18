<template>
  <div>
    <h1>{{msg}}</h1>
    <h1 @click="showName">student name : {{ name }}</h1>
    <h1>gender : {{ gender }}</h1>

  </div>
</template>

<script>
//局部mixin
// import {mixin,mixin2} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      msg:"欢迎来到vue",
      name:"Jerry",
      gender:"male",
      x:12
    };
  },
  // mixins:[mixin,mixin2]


};
</script>
