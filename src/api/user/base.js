//引入封装的公共的请求插件
import {GET, POST, UPLOAD} from '@/services/request.js'

export default {
    register(data = {})
    {
        //注册接口
        //api/user/base/register
        return POST({
            url:'/user/base/register',
            params:data
        })
    },
    login(data = {})
    {
        //登录接口
        return POST({
            url:'/user/base/login',
            params:data
        })
    },
    profile(data = {}) 
    {
        //更改用户资料接口
        return UPLOAD({
            url:'/user/base/profile',
            params:data
        })
    }
}