<template>
  <div class="main">
    <h1> Welcome to learn Vue!!</h1>
    <School/>
    <hr>
      <!--通过父组件给子组件传递函数类型的props实现了子给父传递数据-->
    <Student />

  </div>
</template>

<script>
import School from './components/School.vue';
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },

};
</script>

<style>
.main{
  background-color: blue;
}
</style>
