import axios from 'axios'
import { Loading } from 'element-ui';
import { Message } from 'element-ui';
import router from './router/index'


let Loading1;
function startLoading(){
	Loading1 = Loading.service({
		lock:true,
		text:'加载中',
		background:'rgba(0,0,0,.6)'
	});
}
function endLoading(){
	Loading1.close()
	
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	startLoading()
	// 如果localstorage中存在token,就设置统一的请求头

		if(localStorage.eleToken){
			config.headers.Authorization = localStorage.eleToken
		}

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	endLoading()
    return response;
  }, function (error) {
	// 对响应错误做点什么
	endLoading()
	Message.error(error)
// 获取错误状态码
const {status} = error.response
if(status == 401){
	/***
	 * 	401
当前请求需要用户验证。该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。客户端可以重复提交一个包含恰当的 Authorization 头信息的请求。如果当前请求已经包含了 Authorization 证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。
	 * 
	 */
	Message.error('token失效,请重新登录')
	localStorage.removeItem('eleToken')
	router.push('/login')

}


    return Promise.reject(error);
  });


export default axios