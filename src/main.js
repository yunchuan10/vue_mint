

import Vue from 'vue'

// vuex 仓储
import store from './store/store.js'



// 全局过滤器
Vue.filter(
	'dateFormat', function( dateStr ){
		if( typeof dateStr == 'string' && dateStr.indexOf('-') == -1 ){
			var newdateStr = dateStr.substr(0, 4)+'-'+dateStr.substr(4, 2)+'-'+dateStr.substr(6, 2);
			return newdateStr;
		}
	}
)




// import $ from 'jquery'
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

import './css/index.css'

/*mint*/
import 'mint-ui/lib/style.css'
// import {Header,Swipe, SwipeItem,Button, Indicator,Lazyload } from 'mint-ui'
import MintUi from 'mint-ui'

Vue.use(MintUi);

// import VuePreview from 'vue-preview'
// defalut install
// Vue.use(VuePreview)
// console.log(VuePreview)

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview,{
	fullscreenEl:true
});


/*mui*/
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
// Vue.component( Header.name, Header )

import router from './router/router.js'
import app from './app.vue'


// 首页布局 轮播+列表
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);



var vm = new Vue({
	el: '#app',
	router,
	store,		// vuex仓储
	render: h => h( app )
	
	
});















