import axios from 'axios'
import qs from 'qs'


const instance = axios.create({
  timeout: 10000
})

/* 
添加请求拦截器，处理Post请求参数(从对象转换urlencoding)
*/
instance.interceptors.request.use((config) => {
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)//username=tom&pwd=123
  }
  return config
})
/* 
响应拦截器
 成功：response.data
 失败：处理异常
*/
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(error.message)
    return new Promise(() => { })
  }
)
export default instance