<template>
    <div class="home-section">

        <!-- 轮播组件 -->
        <lun-bo :content="lunList"></lun-bo>

        <!-- 九宫格 -->
        <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻列表</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photo">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图片</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goods">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">goodList</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div>
                    </router-link>
                </li>
                
            </ul>
        </div>    
    </div>
    
</template>

<script>

import lunBo from '../lunbo.vue'

export default {
    data() {
        return {
            lunList: []

        };
    },

    components: {
        'lun-bo': lunBo
    },

    created() {
        this.getLun();
    },
    

    methods: {
        getLun() {
            setTimeout(() => {
                
                this.lunList = [
                {
                    src:
                    "http://uliaobao.oss-cn-hangzhou.aliyuncs.com/orig/uliaobao/ad/2018/0511/21/prod-200047228-3349.jpg",
                    url: "1"
                },
                {
                    src:
                    "http://uliaobao.oss-cn-hangzhou.aliyuncs.com/orig/uliaobao/ad/2018/0524/21/prod-165616580-0147.jpg",
                    url: "2"
                },
                {
                    src:
                    "http://uliaobao.oss-cn-hangzhou.aliyuncs.com/orig/uliaobao/ad/2017/1219/21/prod-102514114-8448.jpg",
                    url: "3"
                }
                ];
            }, 1000);
        }
    }
};
</script>

<style scoped>



</style>











