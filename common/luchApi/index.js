import configUrl from "@/common/config.js"
import Request from './request'

const http = new Request();


import store from '@/store'

// 以下baseurl 均可放在common/config下进行全局定义，此处只做示例展示

// const BASE_URL = "http://192.168.6.130:8081/chongguan/api/v1/";
// const IMG_BASE_URL = "http://192.168.6.130:8081/chongguan/img/server/";

// http://plt.yiyiny.com/api
// const YiYIGJ_URL = 'http://plt.yiyiny.com/api';
// const WANJIA_URL = 'https://wanjia.yiyitop.com/platauth.html';

var log = console.log.bind(console);
var S = JSON.stringify.bind(JSON);

http.setConfig((config) => {
	config.baseUrl = configUrl.API_BASE_URL;
	config.imgBaseURL = configUrl.IMG_BASE_URL;
	// 引入其他请求,仅用展示,此项目无用
	// config.yygjURL = YiYIGJ_URL;
	// config.wanjiaURL = WANJIA_URL;
	config.header = {
		...config.header
	}
	http.config.timeout = 300000;
	return config
})


/**
 * object转化成url拼接样式
 * @param obj 需要转化的参数
 */
const objToUrl = obj => {
	let arr = [];
	for (let i in obj) {
		if (obj.hasOwnProperty(i)) {
			arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
		}
	}
	return arr.join("&");
}


http.interceptor.request((config, cancel) => {
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
	  cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	// 过滤不需要token的接口
	if (config.url.indexOf('O/') > 0 || config.url.indexOf('platauth') > 0 ||
		config.url.indexOf('checkToken') > 0 || config.url.indexOf('addLogin') > 0 || config.url.indexOf('refreshToken') >
		0) {
		return config;
	} else {
		config.header = {
			...config.header,
			// 'X-AUTH-TOKEN': userToken
		}
		return config
	}
	// return config;
})
http.interceptor.response((response) => {
	/**
	 * @param {code}
	 * 0:请求报错，直接弹框提示
	 * 1:请求成功，处理数据，进行页面交互
	 * 2:用户登录失效，提示登录失效，自动跳转登录。
	 * */
	 	return response.data
	// if (response.data.code == 1 || response.data.code == 3 || response.data.code == 4) {
	// 	return response.data
	// } else if (response.data.code == 203) {
	// 	http.post('user/refreshToken', objToUrl({
	// 		userId: uni.getStorageSync("user_id")
	// 	})).then(res => {
	// 		uni.setStorageSync('user_token', res.data.token)
	// 		store.commit("USER_TOKEN", res.data.token)
	// 		return response.data
	// 	})
	// } else {
	// 	uni.showToast({
	// 		icon: 'none',
	// 		title: res.msg || '数据返回异常',
	// 		duration: 2000,
	// 		complete: () => {}
	// 	});
	// 	return response.data
	// }

}, (response) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
	console.log('对响应错误做点什么',response);
	return response;
})

export default http;
