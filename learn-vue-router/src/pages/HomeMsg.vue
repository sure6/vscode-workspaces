<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- <router-link to="/home/message/detail?id=666&title=你好啊!">{{item.title}}</router-link>&nbsp;&nbsp; -->
        <!-- <router-link :to=" `/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>&nbsp;&nbsp; -->
        <!-- <router-link :to="{
          // path:'/home/message/detail',
          // 用name只能在对象中使用, 而且用params参数传参必须使用path
          name:'xiangqin',
          // 如果用restful风格则需要用params
          query:{
            id:item.id,
            title:item.title,
          }
        }">
         {{item.title}}
        </router-link>&nbsp;&nbsp;
         -->
        <router-link :to=" `/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>&nbsp;&nbsp; 
       
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"HomeMsg",
    data() {
      return {
        messageList:[
          {
            id:"001",
            title:"message001"
          },
          {
            id:"002",
            title:"message002"
          },
          {
            id:"003",
            title:"message003"
          },
        ]
      }
    },
}
</script>

<style>

</style>