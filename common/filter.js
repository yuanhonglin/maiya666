/**
 * @Author: SnowBeatRain
 * @createTime: 2019-09-28
 * @updateTime: 2019-09-28
 * @description: 定义全局过滤器。
 */


/**
 * 格式化时间戳
 * @param {type}  
 * */ 
 
 import Vue from 'vue';
 
 Vue.filter('dataFormat', function(dataTime) {
 	var date = new Date(dataTime * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
 	var Y = date.getFullYear() + '-';
 	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
 	var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
 	var h = date.getHours() + ':';
 	var m = date.getMinutes() + ':';
 	var s = date.getSeconds();
 	return Y + M + D
 })
 Vue.filter('dataTimeFormat', function(dataTime) {
 	var date = new Date(dataTime * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
 	var Y = date.getFullYear() + '-';
 	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
 	var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
 	var h = date.getHours() + ':';
 	var m = date.getMinutes() + ':';
 	var s = date.getSeconds();
 	return Y + M + D + h + m + s
 })