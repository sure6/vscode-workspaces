<template>
  <div> 
    <School class="demo"></School>
    <Student></Student>
  </div>
</template>

<script>
    // 引用组件
    import School from 'learn-vue/vue/School';
    import Student from 'learn-vue/vue/Student'

    export default {
        name:"App",
        comments:{
            School,
            Student
        }
    }
</script>

<style>
.demo{
   color: bisque; 
}
</style>