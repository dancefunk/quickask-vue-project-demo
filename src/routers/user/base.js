//引入组件
import index from '@/components/user/base/index.vue'
import login from '@/components/user/base/login.vue'
import register from '@/components/user/base/register.vue'
import profile from '@/components/user/base/profile.vue'

export default [
    {
        //会员中心
        path:'base/index',
        name:'BaseIndex',
        component:index,
        meta:{ //如果路由中存在这个属性 就代表需要登录才能访问
            auth:true
        }
    },
    {
        //基本资料
        path:'base/profile',
        name:'BaseProfile',
        component:profile,
        meta:{
            auth:true
        }
    },
    {
        //登录界面
        path:'base/login',
        name:'BaseLogin',
        component:login
    },
    {
        //注册界面
        path:'base/register',
        name:'BaseRegister',
        component:register
    }
]