<template>
  <div class="main">
    <h1> Welcome to learn Vue!!</h1>
    <!--通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第一种写法使用@或v-on-->
    <School v-on:uow="getSchoolName" @demo="test" @click.native="show"/>
     <!--once代表改事件只执行一次-->
    <!-- <School @uow.once="getSchoolName"/> -->
      <!--第二种写法使用ref绑定事件--->
    <!-- <School ref="school"/> -->
    <hr>
      <!--通过父组件给子组件传递函数类型的props实现了子给父传递数据-->
    <Student :getStudentName="getStudentName"/>

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
  methods: {
    getStudentName(studentName,...params){
      alert(studentName)
      console.log(studentName, params);
    },
    getSchoolName(schoolName,){
      alert(schoolName)
    },
    test(){
      console.log("demo自定义事件触发")
    },
    show(){
      alert("组件触发原生事件必须用修饰符.native")
    }
  },
  //可以通过ref拿到组件实例对象
  // mounted() {
  //   setTimeout(()=>{
  //     this.$refs.school.$on('uow',this.getSchoolName) 
  //     // this.$refs.student.$once('uow',this.getSchoolName) 
  //   },3000)

  // },
};
</script>

<style>
.main{
  background-color: blue;
}
</style>
