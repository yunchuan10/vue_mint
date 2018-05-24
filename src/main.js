

import Vue from 'vue'
//import $ from 'jquery'
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap.js'

import './css/index.css'

/*mint*/
import 'mint-ui/lib/style.css'
import {Header} from 'mint-ui'

/*mui*/
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
Vue.component( Header.name, Header )

import router from './router/router.js'
import app from './app.vue'



var vm = new Vue({
	el: '#app',
	router,
	render: h => h( app )
	
	
});















