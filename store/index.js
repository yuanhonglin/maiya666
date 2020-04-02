// 组装模块并导出store的地方
import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/common/luchApi/api.js'
Vue.use(Vuex)

import {
	USER_INFO,
	USER_ID,
	IS_LOGIN,
	USER_TOKEN,
	LOCALTION_CITY,
	LOCALTION_REGION
} from '@/store/mutations.js'

const store = new Vuex.Store({
	state: {
		userInfo:uni.getStorageSync('userInfo') ,
	},
	mutations: {
		
	},
	// 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤等；我们可以在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。例如：
	getters: {
		setLogin: state => {
			return state.isLogin ? '已登录' : '未登录'
		}
	},
	actions: {}
})

export default store
