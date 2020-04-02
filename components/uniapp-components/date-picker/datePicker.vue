<template>
	<view class="mpvue-picker">
		<view :class="{ pickerMask: showPicker }" @tap="maskClick" catchtouchmove="true"></view>
		<view class="mpvue-picker-content" :class="{ 'mpvue-picker-view-show': showPicker }">
			<view class="mpvue-picker__hd" catchtouchmove="true">
				<view class="mpvue-picker__action" @tap="pickerCancel">取消</view>
				<view class="mpvue-picker__action" :style="{ color: themeColor }" @tap="pickerConfirm">确定</view>
			</view>
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickVal"
				@change="pickerChange"
				v-if="mode == 'date' || mode == 'dateTime' || mode == 'yearMonth'"
			>
				<block>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in data.years" :key="index">{{ item }}年</view>
					</picker-view-column>
				</block>
				<block>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in data.months" :key="index">{{ item }}月</view>
					</picker-view-column>
				</block>
				<block>
					<picker-view-column v-if="mode != 'yearMonth'">
						<view class="picker-item" v-for="(item, index) in data.days" :key="index">{{ item }}日</view>
					</picker-view-column>
				</block>
				<block>
					<picker-view-column v-if="mode == 'dateTime'">
						<view class="picker-item" v-for="(item, index) in data.hours" :key="index">{{ item }}时</view>
					</picker-view-column>
				</block>
				<block>
					<picker-view-column v-if="mode == 'dateTime'">
						<view class="picker-item" v-for="(item, index) in data.minutes" :key="index">{{ item }}分</view>
					</picker-view-column>
				</block>
			</picker-view>
			<view class="mpvue-picker-view" v-if="mode == 'time'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<block>
						<picker-view-column>
							<view class="picker-item" v-for="(item, index) in data.hours" :key="index">{{ item }}时</view>
						</picker-view-column>
					</block>
					<block>
						<picker-view-column>
							<view class="picker-item" v-for="(item, index) in data.minutes" :key="index">{{ item }}分</view>
						</picker-view-column>
					</block>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
import { initPicker, initDays } from './utils.js';
export default {
	data() {
		return {
			result: [],
			data: {},
			checkArr: [],
			checkValue: [],
			pickVal: [],
			showPicker: false
		};
	},
	computed: {},
	props: {
		mode: {
			type: String,
			default() {
				return 'date';
			}
		},
		themeColor: {
			type: String,
			default() {
				return '#f00';
			}
		},
		startYear: {
			type: String,
			default() {
				return '1970';
			}
		},
		endYear: {
			type: String,
			default() {
				return new Date().getFullYear() + '';
			}
		},
		defaultVal: {
			type: Array,
			default() {
				return [0, 0, 0, 0, 0];
			}
		}
	},
	watch: {
		mode() {
			this.initData();
		}
	},
	mounted(){
		this.initData();
	},
	methods: {
		/* 点击遮罩层 关闭 */
		maskClick() {
		    this.pickerCancel();
		},
		show() {
			this.showPicker = true;
		},
		hide() {
			this.showPicker = false;
		},
		pickerCancel() {
			this.$emit('cancel', {
				checkArr: this.checkArr,
				defaultVal: this.pickVal
			});
			this.showPicker = false;
		},
		pickerConfirm(e) {
			this.$emit('confirm', {
				checkArr: this.checkArr,
				defaultVal: this.pickVal
			});
			this.showPicker = false;
		},
		pickerChange(val) {
			let arr = val.detail.value;
			let year = '',
				month = '',
				day = '',
				hour = '',
				minute = '',
				province,
				city,
				area;
			let checkArr = this.checkArr;
			let days = [];
			let mode = this.mode;
			switch (mode) {
				case 'date':
					year = this.data.years[arr[0]];
					month = this.data.months[arr[1]];
					day = this.data.days[arr[2]];
					if (year != checkArr[0]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					if (month != checkArr[1]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					this.checkArr = [year, month, day];
					break;
				case 'yearMonth':
					year = this.data.years[arr[0]];
					month = this.data.months[arr[1]];
					this.checkArr = [year, month];
					break;
				case 'dateTime':
					year = this.data.years[arr[0]];
					month = this.data.months[arr[1]];
					day = this.data.days[arr[2]];
					hour = this.data.hours[arr[3]];
					minute = this.data.minutes[arr[4]];
					if (year != checkArr[0]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					if (month != checkArr[1]) {
						days = initDays(year, month);
						this.data.days = days;
					}
					this.checkArr = [year, month, day, hour, minute];
					break;
				case 'time':
					hour = this.data.hours[arr[0]];
					minute = this.data.minutes[arr[1]];
					this.checkArr = [hour, minute];
					break;
				case 'region':
					province = this.data.provinces[arr[0]].label;
					city = this.data.citys[arr[1]].label;
					area = this.data.areas[arr[2]].label;
					if (province != checkArr[0]) {
						this.data.citys = citys[arr[0]];
						this.data.areas = areas[arr[0]][0];
						arr[1] = 0;
						arr[2] = 0;
						city = this.data.citys[arr[1]].label;
						area = this.data.areas[arr[2]].label;
					}
					if (city != checkArr[1]) {
						this.data.areas = areas[arr[0]][arr[1]];
						arr[2] = 0;
						area = this.data.areas[arr[2]].label;
					}
					this.checkArr = [province, city, area];
					this.checkValue = [this.data.provinces[arr[0]].value, this.data.provinces[arr[0]].value, this.data.areas[arr[2]].value];
					break;
			}
			this.pickVal = arr;
		},
		initData() {
			let data = {};
			let mode = this.mode;
			let year, month, day, hour, minute, province, city, area;
			if (mode != 'region') {
				data = initPicker(this.startYear, this.endYear, this.mode);
			} else {
				data = {
					provinces: provinces,
					citys: citys[this.defaultVal[0]],
					areas: areas[this.defaultVal[0]][this.defaultVal[1]]
				};
			}
			this.data = data;
			this.pickVal = this.defaultVal;
			switch (mode) {
				case 'date':
					year = data.years[this.defaultVal[0]];
					month = data.months[this.defaultVal[1]];
					day = data.days[this.defaultVal[2]];
					this.checkArr = [year, month, day];
					break;
				case 'yearMonth':
					year = data.years[this.defaultVal[0]];
					month = data.months[this.defaultVal[1]];
					this.checkArr = [year, month];
					break;
				case 'dateTime':
					year = data.years[this.defaultVal[0]];
					month = data.months[this.defaultVal[1]];
					day = data.days[this.defaultVal[2]];
					hour = data.hours[this.defaultVal[3]];
					minute = data.minutes[this.defaultVal[4]];
					this.checkArr = [year, month, day, hour, minute];
					break;
				case 'time':
					hour = data.hours[this.defaultVal[0]];
					minute = data.minutes[this.defaultVal[1]];
					this.checkArr = [hour, minute];
					break;
				case 'region':
					province = data.provinces[this.defaultVal[0]];
					city = data.citys[this.defaultVal[1]];
					area = data.areas[this.defaultVal[2]];
					this.checkArr = [province.label, city.label, area.label];
					this.checkValue = [province.value, city.value, area.value];
					break;
			}
		}
	}
};
</script>

<style lang="scss">
.pickerMask {
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
}

.mpvue-picker-content {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	transition: all 0.3s ease;
	transform: translateY(100%);
	z-index: 3000;
}

.mpvue-picker-view-show {
	transform: translateY(0);
}

.mpvue-picker__hd {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80rpx;
	background-color: #fff;
	position: relative;
	text-align: center;
	font-size: 34rpx;
}

.mpvue-picker__hd:after {
	content: ' ';
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 1px;
	border-bottom: 1px solid #e5e5e5;
	color: #e5e5e5;
	transform-origin: 0 100%;
	transform: scaleY(0.5);
}

.mpvue-picker__action {
	color: #1aad19;
	font-size: 30rpx;
	height: 100%;
	line-height: 80rpx;
	padding: 0 30rpx;
}

.mpvue-picker__action:first-child {
	text-align: left;
	color: #888;
}

.mpvue-picker__action:last-child {
	text-align: right;
}

.picker-item {
	text-align: center;
	line-height: 40px;
	font-size: 16px;
}

.mpvue-picker-view {
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 238px;
	background-color: rgba(255, 255, 255, 1);
}
</style>
