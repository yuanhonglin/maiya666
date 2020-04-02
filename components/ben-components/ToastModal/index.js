import Vue from 'vue'
import ToastModal from './ToastModal.vue'
const toastModal = Vue.extend(ToastModal);
let $vm;

// 自定义确认框

/**
 * @Author: SnowBeatRain
 * @param {Object} options
 * {
 * title: 确认框标题
 * content：确认框内容
 * primaryBtn：确认按钮文字
 * cancelBtn：取消按钮文字
 * primaryColor：确认按钮颜色
 * cancelColor：取消按钮颜色
 * }
 */
let modal = function(options = {}) {
	return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
		if (!$vm) {
			$vm = new toastModal({
				el: document.createElement('view')
			});
			if (typeof options === 'string') {
				$vm.content = options
			} else if (typeof options === 'object') {
				let {
					title,
					content,
					primaryBtn,
					cancelBtn,
					primaryColor,
					cancelColor
				} = options
				$vm.title = title
				$vm.content = content
				$vm.primaryBtn = primaryBtn
				$vm.cancelBtn = cancelBtn
				$vm.primaryColor = primaryColor
				$vm.cancelColor = cancelColor


			} else {
				return
			}
			// $vm.show = true
			document.body.appendChild($vm.$el);
		}
		console.log($vm)
		$vm.show = true
		$vm.clickMask = () => {
			$vm.show = false;
		}
		$vm.confirm = ()=> {
			res("点击了确认按钮")
			$vm.show = false
		}
		$vm.cancel = ()=> {
			rej("您点击了取消按钮")
			$vm.show = false
		}
	})
}

export default {
	modal
}
