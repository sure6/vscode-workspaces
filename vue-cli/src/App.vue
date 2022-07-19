<template>
  <div>
    <button @click="getStudents">获取学生的信息</button>
    <button @click="getOther">获取其他信息</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: "App",
  methods: {
    getStudents(){
      axios.get("http://localhost:8080/api/H5/Test.html").then(
        response=>{
          console.log("请求成功了", response.data);
        },
        error=>{
          console.log("请求成功了", error.message);
        }
      )
    },
    getOther(){
      axios.get("http://localhost:8080/foo/H5/leesure.html").then(
        response=>{
          console.log("请求成功了", response.data);
        },
        error=>{
          console.log("请求成功了", error.message);
        }
      )
    }
  },
}
</script>
