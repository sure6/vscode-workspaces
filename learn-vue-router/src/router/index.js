import VueRouter from 'vue-router'

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

import HomeNew from "../pages/HomeNew.vue";
import HomeMsg from "../pages/HomeMsg.vue";
import MesDetail from "../pages/MesDetail.vue";

const router = new VueRouter({
    routes:[
        {
            name:"guanyu",
            path:"/about",
            component:About
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"news",
                    component:HomeNew
                },
                {
                    path:"message",
                    component:HomeMsg,
                    children:[
                        {
                            name:"xiangqin",
                            path:"detail/:id/:title",
                            component:MesDetail,
                            // prop第一种写法, 值为对象, 该对象中所用key-value都是以props形式传给detail
                            // props:{a:1, b:"hello"}
                            // props的第二种写法,值为布尔值,若布尔值为真, 就会把路由组件收到的所有params参数,以props的形式传给Detail组件
                            // props:true,
                            // props的第三种写法, 值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

export default router;