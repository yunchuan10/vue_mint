<template>
<div class="lunbox">
    <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="( item, i ) in content" :num="i" :key="item.url"><img :src="item.src" alt=""></mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>


export default {
    props: [ 'content' ],

    data() {
        return {
            lunList: []

        };
    },

    created() {
        // this.getLun();
    },
    mounted() {
        
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
                },
                {
                    src:
                    "http://uliaobao.oss-cn-hangzhou.aliyuncs.com/orig/uliaobao/ad/2018/0524/21/prod-165616580-0147.jpg",
                    url: "4"
                }
                ];
            }, 1000);
        }
    }
};
</script>

<style scoped>

    .lunbox {
        height: 200px;
        background: #ddd;
    }
    .mint-swipe-item > img {
        width: 100%;
        height: 100%;
    }
</style>
