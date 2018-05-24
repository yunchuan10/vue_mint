
//import $ from 'jquery'
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap.js'

import './css/index.css'

import Vue from 'vue'
import router from './router/router.js'
import app from './app.vue'



var vm = new Vue({
	el: '#app',
	router,
	render: h => h( app )
	
	
});















