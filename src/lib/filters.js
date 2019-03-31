import Vue from 'vue'
let moment = require('moment')
// 时间过滤器
Vue.filter('dateF',function(date,str){
	return moment(date).format(str)
})