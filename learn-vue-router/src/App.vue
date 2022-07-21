<template>
  <div id="app">
    <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始使用a标签跳转多个页面,多页面应用-->
         <a class="list-group-item active" href="./about.html">About</a>
         <a class="list-group-item" href="./home.html">Home</a>
          <!--vue中借助router=link标签实现路由的切换-->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--router-view确定视图的位置-->
            这是路由主页面
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    About
  }
}
</script>
