<template>
 <h1>这是About组件</h1>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  mounted(){
    console.log("About组件挂载了",this);
    

    Window.abc=this.$router
    Window.abc=this.$route
  },
  beforeDestroy(){
    console.log("About组件将要被摧毁");
  }
}
</script>

