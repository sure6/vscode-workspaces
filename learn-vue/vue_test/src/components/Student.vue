<template>
  <div class="student">
    <h2>student name : {{ name }}</h2>
    <h2>gender : {{ gender }}</h2>
    <h2 v-if="schoolName">school name : {{ schoolName }}</h2>
    <button @click="sendStudentName">点我获取studentname</button>

  </div>
</template>

<script>
import pubsub from "pubsub-js"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name:"Jerry",
      gender:"male",
      schoolName:""
    };
  },
  methods: {
    sendStudentName(){
      pubsub.publish("hello2",this.name)
    },
  
  },
  mounted(){
    this.pubId =  pubsub.subscribe('hello',(msg,data)=>{
      console.log("subscibe",msg, data);
      this.schoolName=data
   })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)
  }

};
</script>

<style scoped>
.student{
  background-color: yellowgreen;
  padding: 5px;
}
</style>
