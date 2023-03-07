// 引入当前目录下面的所有文件
const ModulesFile = import.meta.globEager('./*.js')

const RouterList = []

Object.values(ModulesFile).map(async mod => {
  if(mod.default)
  {
    RouterList.push(...mod.default)
  }
})

//定义父组件
const layout = {
  template:`<router-view></router-view>`
}

//导出
export default [
  {
    path:'/product', //父路由
    component:layout, //父组件
    children:RouterList //子路由分组
  }
]