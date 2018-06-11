
import Vue from 'vue'
import Vuex from 'vuex';
// console.log(Vuex)
Vue.use(Vuex);

export default new Vuex.Store({
	// 1. state
    state:{
		city:"城市名",
		
		shopCarNum: 0,		// 购物车数量	
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getCityFn(state){
            return state.city;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        setCityName({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setCity", name);
        }
    },
    // 4. mutations
    mutations:{
        // name传递过来的数据
        setCity(state, name){
            state.city = name;//将传参设置给state的city
		},
		
		setCarNum(state, name){
			name = parseInt(name)||1;
			state.shopCarNum += name;
		}
    }
});







