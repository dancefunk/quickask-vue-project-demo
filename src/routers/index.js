//引入路由对象
import { createRouter, createWebHistory } from "vue-router"

// 设置一个默认首页
import home from '@/components/home.vue'

// import home from '@/components/vue3/setup.vue'  //vue3这个目录里面放的都是Vue3新特性的案例代码

// 引入每个目录下面的index.js文件
const ModulesFile = import.meta.globEager("./*/index.js")

// 总路由集合
const RouterList = []

//提取每个对象下的值 同步获取
Object.values(ModulesFile).map(async mod => {
  if(mod.default)
  {
    RouterList.push(...mod.default)
  }
})

RouterList.push({
  path:'/', //传参选项 query
  name:'home', //传参选项 params
  component: home,
  // meta:{ //自定义参数
  //   Auth:true, //自定义命名 比如Auth为true就是需要登录 否则不需要登录
  // }
})

// 创建一个总路由对象
export default createRouter({
  history: createWebHistory(),  //history模式 并且不会有/# 
  linkExactActiveClass:'active',  //激活链接状态class名称
  routes:RouterList,   //routes 很容易写成 routers !!!!!!!!!
})