import Vue from "vue";
import App from "./App";

Vue.config.productionTip=false;

// 假设x为全局事件代理
// const Demo = Vue.extend({});
// const d = new Demo();

// Vue.prototype.x=d;

new Vue({
    beforeCreate(){
        Vue.prototype.$bus=this // 安装全局事件总线(Global Event Bus)
    },
    render:h=>h(App)
}).$mount("#app")