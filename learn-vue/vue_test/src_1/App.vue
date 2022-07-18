<template>
  <div> 
    <img src="./assets/logo.png" alt="logo">
    <MySchool class="demo"></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
    // 引用组件
    import MySchool from './components/my-school.vue';
    import MyStudent from './components/my-student.vue';

    export default {
        name:"App",
        components:{
            MySchool,
            MyStudent
        }
    }
</script>

<style>
.demo{
   color: bisque; 
}
</style>