import axios from "axios"
import { Message} from 'element-ui'

// 调用axios.create方法，配置一些属性，返回一个新的axios
const request= axios.create({
    baseURL: "http://api.moonyoung.top/",
    //请求超时时间
    timeout: 2000
})

// 请求拦截
request.interceptors.request.use(
	//config 代表是你请求的一些信息
    config => {
        // 在请求发送之前的操作
        return config
    },
    error => {
        // 对错误请求的处理
        // 弹出错误请求消息
        Message({
            showClose: true,
            message: error.message,
            type: "error"
        })
        return Promise.reject(error)
    }
)

//  response拦截器 响应拦截器 请求之后的操作
request.interceptors.response.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default request;
