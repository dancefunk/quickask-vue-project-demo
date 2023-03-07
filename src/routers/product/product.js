//引入组件
import index from '@/components/product/product/index.vue'
import info from '@/components/product/product/info.vue'


export default [
    {
        //产品列表
        path:'index',
        name:'ProductIndex',
        component:index
    },
    {
        //产品详细
        path:'info',
        name:'ProductInfo',
        component:info
    }
]