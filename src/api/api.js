import axios from 'axios'
import vue from 'vue'
import Qs from 'Qs' 

// 
const instance = axios.create({
    // 这个是接口开发环境还是生产环境的配置地址
    // baseURL: process.env.API_ROOT,
    // 超时
    timeout: 10000,
    // 设置请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
    },
    transformRequest: data => Qs.stringify(data)
});

// 存储所有的请求标致和拒绝请求的方法
let  pending =[];
// 这个是控制取消请求的
let cancelToken = axios.CancelToken
// 检查且删掉同样的请求
let removePending = config => {
    for(let p in pending){
        if(pending[p].u === config.url+'&'+config.method){
            // 当前请求在数组中存在时，执行函数体
            pending[p].f(); // 执行取消操作 
            pending.splice(p, 1); // 把这条记录从数组中移除
        }
    }
}

// 请求拦截器
instance.interceptors.request.use(function (config) {
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken( c=>{
        pending.push({u: config.url+'&'+config.method, f:c})
    })
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
   // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中删除
    removePending(response.config);
    return response;
}, function (error) {

    vue.prototype.$loading().close();
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 配置axios发送请求getf方法
export function get (url, params) {
    return new Promise((resolve, reject) => {
        instance
      .get(url, {
       params: params
      })
      .then(res => {
       resolve(res.data)
      })
      .catch(err => {
       reject(err.data)
      })
    })
   }

   export function post (url, params) {
    return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then(
       res => {
        resolve(res.data)
       },
       err => {
        reject(err.data)
       }
      )
      .catch(err => {
       reject(err.data)
      })
    })
   }

// 最后输出axios,准备将其放入vue的原型中,简单的方式
//export default instance;