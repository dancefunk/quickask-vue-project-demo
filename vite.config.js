import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//引入路径模块
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      // "styles": path.resolve(__dirname, "src/styles"),
      // "plugins": path.resolve(__dirname, "src/plugins"),
      // "views": path.resolve(__dirname, "src/views"),
      // "layouts": path.resolve(__dirname, "src/layouts"),
      // "utils": path.resolve(__dirname, "src/utils"),
      // "apis": path.resolve(__dirname, "src/apis"),
      // "dirs": path.resolve(__dirname, "src/directives"),
    },
  },
  server: {
    port: 3000, //设置端口 
    proxy: {
      //设置代理请求 当代理商识别你的请求如果前缀是 /api的话 就会自动转移
      '/api': {
        target: 'http://www.shop.com/api',
        changeOrigin:true,  //跨域
        //替换掉api前缀 防止多个api地址
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: false,
    },
  },
  plugins: [vue()],
})
