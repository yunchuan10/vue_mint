

import Vue from 'vue'


// 全局过滤器
Vue.filter(
	'dateFormat', function( dateStr ){
		if( typeof dateStr == 'string' && dateStr.indexOf('-') == -1 ){
			var newdateStr = dateStr.substr(0, 4)+'-'+dateStr.substr(4, 2)+'-'+dateStr.substr(6, 2);
			return newdateStr;
		}
	}
)




//import $ from 'jquery'
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap.js'

import './css/index.css'

/*mint*/
import 'mint-ui/lib/style.css'
import {Header,Swipe, SwipeItem,Button, Indicator } from 'mint-ui'

/*mui*/
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
Vue.component( Header.name, Header )

import router from './router/router.js'
import app from './app.vue'


// 首页布局 轮播+列表
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


var vm = new Vue({
	el: '#app',
	router,
	render: h => h( app )
	
	
});















