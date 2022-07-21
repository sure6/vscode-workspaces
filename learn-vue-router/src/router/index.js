import VueRouter from 'vue-router'

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

import HomeNew from "../pages/HomeNew.vue";
import HomeMsg from "../pages/HomeMsg.vue";

const router = new VueRouter({
    routes:[
        {
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
                    component:HomeMsg
                }
            ]
        }
    ]
})

export default router;