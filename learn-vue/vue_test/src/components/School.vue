<template>
  <div class="school">
    <h2> School name : {{ name}}</h2>
    <h2>School address : {{ address }}</h2>
    <button @click="sendSchoolName">点我获取schooltname</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name:"UOW",
      address:"11 Northfields",
    };
  },
  methods: {
    // 自定义事件
    sendSchoolName(){
      pubsub.publish('hello',this.name)
    },
  },
  mounted(){
   this.pubId2=pubsub.subscribe("hello2",(msg,data)=>{
      console.log("subscibe",msg, data);
   })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId2)
  }

};
</script>


<style scoped lang="less">
.school{
  background: yellow;
  padding: 5px;
}
</style>
