<template>
  <ul>
    <li :style="{opacity}">{{msg}}</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomeNew",
  data(){
    return {
      msg:'aasda',
      opacity:1
    }
  },
  // beforeDestroy() {
  //   console.log("news即将被销毁");
  // },
  // 除了几个生命周期之外另外3个生命周期函数, $nextTick  activated deactivated
  activated() {
    console.log("news组件被激活了");
    this.timer=setInterval(()=>{
      this.opacity -=0.01
      if(this.opacity <=0) this.opacity=1
    },16)
  },
  deactivated() {
    console.log("news组件失活了");
    clearInterval(this.timer )
  },
};
</script>

<style>
</style>