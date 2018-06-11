<template>
    <div class="car-section"  >
        <div class="mui-card" v-for="(item, n) in car" :key="n">
            <div class="mui-card-content">
                <mt-switch :value="item.select"></mt-switch>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                    <input :ref="'car'+item.id" @change="setCar(item)" class="mui-input-numbox" type="number" :value="item.count" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                </div>
                
                <mt-button @click="delItem" type="danger" size="small">删除</mt-button>
                    
            </div>
        </div>
    </div>
</template>


	
<script>

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
            console.log(this.$refs[numbox][0].value)

            item.count = val;

            this.$store.commit('setCar', item)
        },

        getCar(){
            this.car = this.$store.state.car;
        },
        delItem(){

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
.mui-card-content{padding: 10px 0 10px 20px;}



</style>











