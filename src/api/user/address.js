//引入封装的公共的请求插件
import {GET, POST, UPLOAD} from '@/services/request.js'

//封装接口
export default {
    AddrIndex(data = {})
    {
        //收货地址列表接口
        return POST({
            url:'/user/address/index',
            params:data
        })
    },
    AddrAdd(data = {})
    {
        //添加收货地址接口
        return POST({
            url:'/user/address/add',
            params:data
        })
    },
    AddrEdit(data = {})
    {
        //编辑收货地址接口
        return POST({
            url:'/user/address/edit',
            params:data
        })
    },
    AddrDel(data = {})
    {
        //删除收货地址接口
        return POST({
            url:'/user/address/del',
            params:data
        })
    },
}