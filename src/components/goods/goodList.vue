<template>
	<div class="goods-section">
		
        <ul>
            <li v-for="(item , n) in goodList" :key="n" @click="goInfo(n)">
                <span>￥{{item.now_price}}</span>
                <span class="old_price">￥{{item.old_price}}</span>
                <p>还剩{{item.num}}件</p>
            </li>
        </ul>

      
	</div>
</template>

<script>

import { Indicator } from 'mint-ui'      //加载

export default {
    data(){
        return{
            pageindex: 1,
            goodList: []
        }
    },
    created(){
        Indicator.open();
        this.getList();
	},
	mounted() {
        
    },
    methods: {

        goInfo(id){
            // this.$router.push('/home/goodInfo/?id=' + id);
            // this.$router.push({ path: '/home/goodInfo/?id=' + id });
            this.$router.push({ name: 'goodinfo', params: { id } });
        },


        getList() {
            setTimeout( () => {

                Indicator.close();
                this.goodList = [
                    {
                        now_price: 535,
                        old_price: 6546,
                        num: 4243
                    },
                    {
                        now_price: 535,
                        old_price: 6546,
                        num: 4243
                    },
                    {
                        now_price: 535,
                        old_price: 6546,
                        num: 4243
                    },
                    {
                        now_price: 535,
                        old_price: 6546,
                        num: 4243
                    },
                    {
                        now_price: 535,
                        old_price: 6546,
                        num: 4243
                    }
                ]

            },1000 )
            
        }
    }


}

</script>

<style lang="less" scoped>

li{
    display: flex; height: 100px;padding: 20px;border: 1px solid;margin: 10px 0;justify-content: space-between;flex-flow: row; align-items: stretch;

    .old_price{color: #ddd;text-decoration:line-through;}
    // p{flex: 1;height: 30px;}
    // span{height: 30px; }
}
	
</style>