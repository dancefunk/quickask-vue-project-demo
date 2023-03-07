import { createApp } from 'vue'
import App from './App.vue'

//引入全局样式
import './style.css'

// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css'

//加载路由
import router from './routers/index.js'

//加载接口
import api from './api/index.js'

// 加载cookie
import VueCookies from 'vue3-cookies'

//加载自定义插件
import demo from './services/demo'

const app = createApp(App)
    .use(Vant)
    .use(router)
    .use(api)
    .use(VueCookies)
    .use(demo)
    .mount('#app')


//全局前置路由守卫
router.beforeEach((to, from, next) => {
    //to 这个参数代表 去到哪个路由
    //from 这个参数代表 从哪里来
    //next 这个参数代表 是否可以去到下一步
    //我们可以根据to当中是否有meta信息来判断当前的路由是否需要登录
    //这个就是我们常见的判断是否有登录
    var auth = to.meta.auth ? to.meta.auth : false
    //如果auth=true 就说明是需要登录的，否则就不需要登录
    if(auth)
    {
        // 需要登录去到登录界面
        // next('/user/base/login')
        next()
    }else
    {
        //不需要登录直接去到下一步
        next()
    }
})