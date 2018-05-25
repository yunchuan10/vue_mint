import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import member from '../components/member.vue'
import search from '../components/search.vue'
import shopCar from '../components/shopCar.vue'



Vue.use(Router)

export default new Router({
  	routes: [
    	{
	      	path: '/home',
	      	component: home
		},
		{
			path: '/member',
			component: member
	  	},
		{
			path: '/search',
			component: search
		},
		{
			path: '/shopcar',
			component: shopCar
		},
		{path:'/', redirect:'/home'}  	//重定向  
    	
  	],
  	
  	linkActiveClass: 'mui-active'		//路由高亮类
})










