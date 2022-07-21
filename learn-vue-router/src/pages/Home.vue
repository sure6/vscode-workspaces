<template>
 <h1>这是Home组件</h1>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  mounted(){
    console.log("Home组件挂载了",this);
    
    window.abc=this.$router
    window.abc=this.$route
  },
  beforeDestroy(){
    console.log("Home组件将要被摧毁");
  }
}
</script>

