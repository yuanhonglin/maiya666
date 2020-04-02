import http from './index'
import md5 from '@/utils/md5.js'
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
/**
 * url转化成object拼接样式
 * @param url 需要转化的参数
 */
const urlToObj = url => {
	let string = url.split('&');
	let res = {};
	for (let i = 0; i < string.length; i++) {
		let str = string[i].split('=');
		if (str[0] != '') {
			res[str[0]] = str[1];
		}
	}
	return res;
}

// 应用编号和签名  开发环境
// let appId = 1
// let appSecret = "l3A44xNwuZ8"
// 应用编号和签名
let appId = 5
let appSecret = "FVikcEgR6OA"
let t_time = parseInt(new Date().getTime() / 1000)
let s_sing = md5(appSecret + ',' + t_time)

let ab_ = {
	// 生成带签名的RpcUri
	pr(uri) {
		let t = parseInt(new Date().getTime() / 1000)
		return uri + '?t=' + t + '&p=' + appId + '&s=' + md5(appSecret + ',' + t)
	}
}
const API = {
	BaseUrl: http.config.baseURL,
	imgBaseUrl: http.config.imgBaseURL,
	yygjUrl: http.config.yygjURL,
	wanjiaURL: http.config.wanjiaURL,
	t: t_time,
	p: appId,
	s: s_sing,
	
	// 接口示例 1---------------------------------------------------------------------------
	oauth: function(token) {
		return http.post(API.yygjUrl + ab_.pr('O/oauth'), JSON.stringify([token]));
	},
	member: function(token) {
		return http.post(API.yygjUrl + ab_.pr('O/member'), JSON.stringify([token, true]));
	},

	// 接口示例 2---------------------------------------------------------------------------
	getWanJiaToken() {
		return http.post(API.wanjiaURL, {
			method: "token.gettoken",
			appid: "YY_wanjia",
			sign: "SDDFJSDMWSDFJ"
		})
	},
	// 接口示例 3---------------------------------------------------------------------------
	refreshToken:function(userId){
		return http.post('user/refreshToken', objToUrl({userId:userId}));
	},
	
	
	// 正式后台数据接口
	
	//注册接口
	register(data){
		return http.post('/index/Doctors/register',data)
	},
	// 登录接口
	login(data){
		return http.post('/index/Doctors/login',data)
	},
	//获取医生端的聊天列表
	getMessageList(data){
		return http.post('/index/Doctors/chatrecord',data)
	},
	//医生端发送消息后转发到微信上端接口
	zhuanfaMessage(data){
		return http.post('/index/Wechat/forward',data)
	}
}

export default API
