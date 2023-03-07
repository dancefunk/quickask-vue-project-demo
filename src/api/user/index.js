//引入当前目录下面所有的文件
const ModulesFile = import.meta.globEager('./*.js')

//接口列表
var ApiList = {}

Object.values(ModulesFile).map(async mod => {
    if(mod.default)
    {
        //合并对象 循环多次合并
        ApiList = Object.assign(ApiList,mod.default)
    }
})

export default ApiList