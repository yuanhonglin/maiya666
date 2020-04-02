import Vue from 'vue'
import store from '../store'

// 定义全局检测是否需要登录的方法
function isLoginFun() {
	let isLogin = new Promise((resolve, reject) => {
		let vuexToken = store.state.userToken
		if (vuexToken) {
			return resolve({
				islogin: true
			});
		} else {
			return resolve({
				islogin: false
			});

		}
	})

	return Promise.all([isLogin]).then((allRes) => {
		if (allRes[0].islogin) {
			return true
		} else {
			uni.showModal({
				content: "您还未登录，是否登录",
				confirmText: "登录",
				cancelText: "再看看",
				success: (res) => {
					if (res.confirm) {
						uni.navigateTo({
							url: "/pages/login/login"
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			})
			return false
		}
	})
}
// 函数节流： 让一个函数不要执行得太频繁，减少一些过快的调用来节流。
function throttle(fun, delay = 1000) {
		let last, deferTimer;
		return function(args) {
			let that = this;
			let _args = arguments;

			let now = +new Date();
			if (last && now < last + delay) {
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function() {
					last = now;
					fun.apply(that, _args);
				}, delay);
			} else {
				last = now;
				fun.apply(that, _args);
			}
		};
	}

	// 防抖：事件保持触发，一定时间内没有触发。在一定时间段的连续函数调用，只让其执行一次
	function debounce(fn, delay) {
		let timerId;
		return function(...args) {
			if (timerId) {
				clearTimeout(timerId);
			}
			timerId = setTimeout(() => {
				fn(...args);
				timerId = null;
			}, delay);
		};
	}


// 使用方法
// eventClick: debounce(function(e){
// 			console.log(e)
// 		}),


Vue.prototype.$isLoginFun = isLoginFun;
Vue.prototype.$throttle = throttle;
Vue.prototype.$debounce = debounce;
