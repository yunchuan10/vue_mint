<template>
	<div class="app-section">
		<!--头部-->
		<span v-show="$route.path != '/home'" class="goBack" @click="goBack">返回</span>
		<mt-header fixed title="固定在顶部"></mt-header>
		
		<!--内容区-->
		<transition appear name="ani" mode="out-in">
			<router-view></router-view>
		</transition>
		
		<!--底部-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="ball-badge" v-text="$store.getters.shopCarNum"></span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>

<script>
	export default {
    data() {
        return {
           
        };
    },

    created() {
        
    },
	mounted(){
		
	},
    methods: {
		goBack(){
			this.$router.back();
		}
		
    }
};
	
	
</script>

<style lang="less">

.mui-slider-indicator.mui-segmented-control{background: #f3f3f3;}

.goBack{position: fixed;font-size: 14px; height: 20px;width: 40px;color: #fff;top: 10px;left: 10px;z-index: 30;}


	.app-section{
		padding: 40px 0 50px;width: 100%;overflow-x: hidden;
		
		.ani-enter{opacity:0;transform: translateX(100%);}
		.ani-leave-to{opacity:0;transform: translateX(-100%);}
		.ani-leave, .ani-enter-to{opacity:1;transform: translateX(0);}
		.ani-enter-active,.ani-leave-active{transition: all 0.3s ease;position: absolute;}


		.mui-bar-tab .mui-tab-item1.mui-active{color: #007aff;}
		.mui-bar-tab .mui-tab-item1 .mui-icon{color: #007aff;padding: 0;}
		.mui-bar-tab .mui-tab-item1 .mui-icon .mui-tab-label{font-size: 11px;
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;}
		
		.mui-bar-tab .mui-tab-item1{display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #929292;}


		.mint-header.is-fixed{z-index: 20;}	
		
	}
	
	


	
</style>