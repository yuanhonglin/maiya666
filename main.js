import Vue from 'vue'
import App from './App'
import store from './store' // 引入vuex
import http from '@/common/luchApi/api.js';  // 仿axios和promise的请求封装
// import http from '@/common/flyioApi/api.js';  // 引入flyio请求，[https://wendux.github.io/dist/#/doc/flyio/readme]
// 引入公用js,
import '@/utils/globalFun.js' // 文件内部已经挂载了全局
import helper from '@/utils/uniToast.js'; // 需要自行处理挂载
import tool from '@/utils/tool.js'

// 引入环信
let WebIM = require("webIM/utils/WebIM")["default"];
let conn = {
	closed: false,
	curOpenOpt: {},
	open(opt) {
		this.curOpenOpt = opt;
		WebIM.conn.open(opt);
		this.closed = false;
	},
	reopen() {
		if (this.closed) {
			//this.open(this.curOpenOpt);
			WebIM.conn.open(this.curOpenOpt);
			this.closed = false;
		}
	}
};

Vue.prototype.$im = WebIM;
Vue.prototype.$conn = conn;


Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.prototype.$helper = helper; // this.$helper.to() 
Vue.prototype.$tool = tool;   //辅助类文件

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
