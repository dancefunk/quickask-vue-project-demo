//引入组件
import index from '@/components/user/address/index.vue'
import add from '@/components/user/address/add.vue'
import edit from '@/components/user/address/edit.vue'

export default [
    {
        //收货地址列表
        path:'address/index',
        name:'AddrIndex',
        component:index,
        meta:{
            auth:true
        }
    },
    {
        //收货地址添加
        path:'address/add',
        name:'AddrAdd',
        component:add,
        meta:{
            auth:true
        }
    },
    {
        //收货地址编辑
        path:'address/edit',
        name:'AddrEdit',
        component:edit,
        meta:{
            auth:true
        }
    },
]