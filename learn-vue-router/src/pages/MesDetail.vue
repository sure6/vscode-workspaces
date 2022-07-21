<template>
  <ul>
    <!-- <li>消息编号{{$route.query.id}}</li>
    <li>消息列表{{$route.query.title}}</li> -->
    <!-- <li>消息编号{{$route.params.id}}</li>
    <li>消息列表{{$route.params.title}}</li> -->
    <li>消息编号:{{id}}</li>
    <li>消息列表:{{title}}</li>
  </ul>
 
</template>

<script>
export default {    
    name:"MesDetail",
    props:["id","title"],
    // mounted(){
    //     console.log(this.$route);
    // }
}
</script>

<style>

</style>