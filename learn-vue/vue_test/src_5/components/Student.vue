<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>student name : {{ name | mySlice}}</h1>
    <h1>gender : {{ gender }}</h1>
    <input type="text" v-fbind:value="name">

  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg:"欢迎来到vue",
      name:"Jerry",
      gender:"male",
    };
  },

};
</script>
