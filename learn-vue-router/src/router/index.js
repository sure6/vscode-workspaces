import VueRouter from 'vue-router'

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

import HomeNew from "../pages/HomeNew.vue";
import HomeMsg from "../pages/HomeMsg.vue";
import MesDetail from "../pages/MesDetail.vue";

const router = new VueRouter({
    // 路由器的工作模式, 默认为hash, 也就是有#/后面的的hash值, 它不会被后端给加载
    mode:"history",
    routes:[
        {
            name:"guanyu",
            path:"/about",
            component:About,
            meta:{isAuth:true,title:"关于"}
        },
        {
            name:"zhuye",
            path:"/home",
            component:Home,
            meta:{title:"主页"},
            children:[
                {
                    name:"xinwen",
                    path:"news",
                    component:HomeNew,
                    meta:{isAuth:true,title:"新闻"},
                    // 独享前置守卫, 没有后置守卫, 要用后置守卫用全局
                    // beforeEnter:(to, from, next)=>{
                    //     console.log("@");
                    //     console.log(to,from);
                    //     if (to.meta.isAuth){
                    //         if(localStorage.getItem("lee")==="sure"){
                    //             next()
                    //         }else{
                    //             alert('localstorage name 都没有')
                    //         }
                    //     }else{
                    //         next()
                    //     } 
                    // }
                },
                {
                    name:"xiaoxi",
                    path:"message",
                    component:HomeMsg,
                    meta:{isAuth:false,title:"消息"},
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

// 全局前置路由守卫(权限校验)--初始化的时候调用, 每次路由切换之前调用
// router.beforeEach((to, from,next)=>{
//     console.log("@");
//     console.log(to,from);
   
//     // next();
//     // if (to.path == '/home/news' || to.path.at('/home/message')){
//     //     if(localStorage.getItem("todos")[0].name==="eating"){
//     //         next()
//     //     }
//     // }
//     if (to.meta.isAuth){
//          if(localStorage.getItem("lee")==="sure"){
//             next()
//         }else{
//             alert('localstorage name 都没有')
//         }
//     }else{
//         next()
//     }
// })

// 全局前置路由守卫(权限校验)--初始化的时候调用, 每次路由切换之前调用
router.afterEach((to,from)=>{
    console.log("@",to,from);
    document.title = to.meta.title || "UOW system"
})

export default router;