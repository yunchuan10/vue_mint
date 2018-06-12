<template>
    <div class="car-section"  >
        <div class="mui-card" v-for="(item, n) in car" :key="n">
            <div class="mui-card-content">
                <mt-switch v-model="item.select"></mt-switch>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                    <input :ref="'car'+item.id" @change="setCar(item)" class="mui-input-numbox" type="number" :value="item.count" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                </div>
                
                <mt-button @click="delItem(item.id)" type="danger" size="small">删除</mt-button>
                &nbsp;&nbsp;￥{{item.price}}    
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="setbox">
                    <p >总数：{{$store.getters.shopCarCount}}</p>
                    <p >总价格：￥{{$store.getters.shopCarMunny}}</p>
                    <mt-button :disabled=" $store.getters.shopCarMunny==0 " type="primary" size="small">去结算</mt-button>
                </div>
            </div>
        </div>

    </div>
</template>


	
<script>

import { MessageBox } from 'mint-ui';

export default {
    data(){
        return{
            value: 1,
            car: []
        }
    },
    created(){
        this.getCar();
	},
	mounted() {
        
        
    },
    methods: {

        setCar(item){
            var numbox = 'car'+item.id;
            var val = parseInt(this.$refs[numbox][0].value);
            item.count = val;

            this.$store.commit('setCar', item);
        },

        getCar(){
            this.car = this.$store.state.car;
        },
        delItem(id){
            MessageBox.confirm('确定删除当前商品?').then(action => { 
                console.log(action);
                this.$store.commit('delCraItem', id);
            }).catch(err => { 
                //取消的回调
            });
            
        }
    },
    components: {
        
    },


}

</script>

<style lang="less" scoped>
.mint-switch{display: inline-block; margin-top: 10px;vertical-align: middle;}
.car-section{background: #eee;overflow: hidden; }
.mint-button-text{margin-top: 10px;}
.mui-card-content{padding: 10px 0 10px 10px;}

.setbox{padding: 10px; }

</style>











