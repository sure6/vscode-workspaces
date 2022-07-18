<template>
  <div class="student">
    <h2>student name : {{ name }}</h2>
    <h2>gender : {{ gender }}</h2>
    <button @click="sendStudentName">点我获取studentname</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name:"Jerry",
      gender:"male",
    };
  },
  props:["getStudentName"],
  methods: {
    sendStudentName(){
      this.getStudentName(this.name,6666,7777,11)
    },
  
  },

};
</script>

<style scoped>
.student{
  background-color: yellowgreen;
  padding: 5px;
}
</style>
