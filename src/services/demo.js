export default {
  install(app, options)
  {
     //定义全局
     app.config.globalProperties.$demo = () => {
       return '自定义插件';
     }
  }
}