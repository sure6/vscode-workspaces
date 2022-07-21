<template>
  <div id="app">
    <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <Banner></Banner>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始使用a标签跳转多个页面,多页面应用-->
         <!-- <a class="list-group-item active" href="">About</a>
         <a class="list-group-item" href="">Home</a> -->
          <!--vue中借助router=link标签实现路由的切换-->
          <!-- replace 模式就是干掉上次访问记录,替换为这次访问记录, 有点像无痕浏览, 控制浏览器的历史访问模式  :replace="true" replace-->
         <router-link  class="list-group-item" active-class="active" to="/about">About</router-link >
         <router-link  class="list-group-item" active-class="active" to="/home">Home</router-link >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--router-view确定视图的位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'

    

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    About,
    Banner
}
}
</script>
