<template>
	<div class="goods-section">
		<!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <!-- <div class="mui-card-content-inner"> -->
                    <!-- 轮播组件 -->
                    <lun-bo :content="lunList"></lun-bo>
                <!-- </div> -->
            </div>
        </div>
        <!-- 商品购买 -->
        <div class="mui-card">
            <div class="mui-card-header">商品购买</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价： <del>￥2014</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价： <span>￥201443</span>
                    </p>
                    <div style="color: #999;padding: 10px 0;">
                        <!-- <input @change="shopChange" ref="numbox" id="test" class="mui-input-numbox" type="number" value="1" /> -->
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input @change="shopChange" ref="numbox" id="test" class="mui-input-numbox" type="number" value="1" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                        (购买数量)
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button :disabled="shopBallDis" @click="shopBall" type="danger" size="small">加入购物车</mt-button>
                    </p>

                </div>
            </div>
            
        </div>
        <!-- 商品信息 -->
        <div class="mui-card">
            <div class="mui-card-header">商品详情</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                    详细信息： 。。。。
                </div>
            </div>
        </div>

        <transition  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div v-if="is_ball" ref="ball" class="ball"></div>
        </transition>
        

	</div>
</template>

<script>

import { Indicator } from 'mint-ui'      //加载
import lunBo from '../lunbo.vue'

// import mui from '../../lib/mui/js/mui.min.js'


export default {
    data(){
        return{
            id: this.$route.params.id,
            lunList: [],
            is_ball: false,
            max: 9,
            shopBallDis:false,
            shoplen: 1
        }
    },
    created(){
        // alert(this.$route.params.id);
        this.getLun();
	},
	mounted() {
        // mui('.mui-numbox').numbox().setOption('step',1)
        // mui('.mui-numbox').numbox();
        
    },
    methods: {

        shopChange(){
            var val = parseInt(this.$refs.numbox.value);
            if( !val || val<=0 || val>this.max ){
                val = 1
            }
            
            if(val!=this.$refs.numbox.value){
                this.$refs.numbox.value = val;
            }
        },

        shopBall(){
            if(!this.is_ball){
                this.is_ball = true;
                setTimeout(() => {
                    var val = parseInt(this.$refs.numbox.value);
                    if(!val || val<=0){
                        val = 1
                    }
                    var obj = {
                        id: this.id,
                        count: val
                    }
                    console.log(obj)
                    this.$store.commit('addCar', obj);
                    this.shopBallDis = false;

                }, 800);
            }
        },
        
        beforeEnter( el ){
            this.shopBallDis = true;
            const numboxOps = this.$refs.numbox.getBoundingClientRect();
            el.style.opacity = 0.1;
            el.style.left = numboxOps.left+14+'px';
            el.style.top = numboxOps.top+8+'px';
            el.style.transform = 'translate(0,0)';
        
        },
        enter( el, done ){
            el.offsetWidth;
            // const numboxOps = this.$refs.ball.getBoundingClientRect();
            const badgeOps = document.getElementById('ball-badge').getBoundingClientRect();
            // var _l = badgeOps.left - numboxOps.left;
            // var _t = badgeOps.top - numboxOps.top;

            
            el.style.transition = 'top 0.8s cubic-bezier(.31,-0.58,.63,1.1), left 0.8s ease, opacity 0.8s ease';
            el.style.opacity = 1;
            el.style.left = badgeOps.left+'px';
            el.style.top = badgeOps.top+'px';
            // el.style.transform = 'translate('+_l+'px,'+_t+'px)';
            done();
        },
        afterEnter( el ){
            
            this.is_ball = false;
        
        },



        getLun() {
            setTimeout(() => {
                
                this.lunList = [
                {
                    src:
                    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=857208617,3319781484&fm=27&gp=0.jpg",
                    url: "1"
                },
                {
                    src:
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg&56666",
                    url: "2"
                },
                {
                    src:
                    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=783340072,1312243264&fm=27&gp=0.jpg",
                    url: "3"
                }
                ];
            }, 1000);
        }
        
    },
    components: {
        'lun-bo': lunBo
    },


}

</script>

<style lang="less" scoped>

.ball{width: 15px;height: 15px;position: fixed;background: #f00;border-radius: 50%;z-index: 99; top: 30px; }

.goods-section{background: #eee;overflow: hidden; }

li>a{
    display: flex; height: 100px;padding: 20px;border: 1px solid;margin: 10px 0;justify-content: space-between;flex-flow: row; align-items: stretch;

    .old_price{color: #ddd;text-decoration:line-through;}
    // p{flex: 1;height: 30px;}
    // span{height: 30px; }
}
	
</style>