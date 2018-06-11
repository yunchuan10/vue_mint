
import Vue from 'vue'
import Vuex from 'vuex';
// console.log(Vuex)
Vue.use(Vuex);

export default new Vuex.Store({
	// 1. state
    state:{
        // city:"城市名",
        car: [
            {id: '0', price: 214, count: 4, select: false},
            {id: '1', price: 24, count: 2, select: false},
            {id: '2', price: 14, count: 3, select: true},
            {id: '3', price: 214, count: 5, select: false},
            {id: '4', price: 14, count: 6, select: true},
            {id: '5', price: 24, count: 2, select: false},
            {id: '6', price: 2, count: 1, select: true}
        ],
		
		// shopCarNum: 0,		// 购物车数量	
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        // getCityFn(state){
        //     return state.city;
        // }
        shopCarNum(state){
            var c=0;
            state.car.forEach ( item => {
                c+=item.count;
            });
            return c;
        }
        
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        setCityName({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            // commit("setCity", name);
        }
    },
    // 4. mutations
    mutations:{
        // name传递过来的数据
        // setCity(state, name){
        //     state.city = name;//将传参设置给state的city
		// },
		
		setCarNum(state, name){
			name = parseInt(name)||1;
			// state.shopCarNum += name;
        },
        setCar(state, goodInfo){
            state.car.some ( item => {
                if( item.id == goodInfo.id ){
                    item.count = goodInfo.count;
                    return true;
                }
            });
        },
        addCar( state, goodInfo ){
            var flag = false;
            state.car.some ( item => {
                if( item.id == goodInfo.id ){
                    item.count += goodInfo.count;
                    flag = true;
                    return true;
                }
            });
            
            if(!flag){
                state.car.push(goodInfo)
            }
        }
    }
});







