// 使用这个就不能使用template属性去渲染
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:"#app",
//   render(createElement) {
//     console.log(createElement);
//     return createElement("h1","hello vue");
//   },
// });

// new Vue({
//   el:"#app",
//   render: (createElement) => {
//     return createElement(App);
//   },
// })


// new Vue({
//   el:"#app",
//   render: createElement =>createElement(App),
// })

