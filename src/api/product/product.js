//引入封装的公共的请求插件
import {GET, POST, UPLOAD} from '@/services/request.js'

export default {
    ProductIndex(data = {})
    {
        //产品列表接口
        return POST({
            url:'/product/product/index',
            params:data
        })
    },
    ProductInfo(data = {})
    {
        //产品详细接口
        return POST({
            url:'/product/product/info',
            params:data
        })
    },
}