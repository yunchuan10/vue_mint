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
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价： <del>￥2014</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价： <span>￥201443</span>
                    </p>
                    <div style="color: #999;padding: 10px 0;">
                        购买数量：
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>

                </div>
            </div>
            
        </div>
        <!-- 商品信息 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>

	</div>
</template>

<script>

import { Indicator } from 'mint-ui'      //加载
import lunBo from '../lunbo.vue'

export default {
    data(){
        return{
            lunList: []
        }
    },
    created(){
        // alert(this.$route.params.id);
        this.getLun();
	},
	mounted() {

        
    },
    methods: {
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

.goods-section{background: #eee;overflow: hidden; }

li>a{
    display: flex; height: 100px;padding: 20px;border: 1px solid;margin: 10px 0;justify-content: space-between;flex-flow: row; align-items: stretch;

    .old_price{color: #ddd;text-decoration:line-through;}
    // p{flex: 1;height: 30px;}
    // span{height: 30px; }
}
	
</style>