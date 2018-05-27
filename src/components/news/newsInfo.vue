<template>
	<div class="newinfo-section">
		<div class="mui-media-body" v-if="item.title">
            <h2>{{item.title}}</h2>
            <p class='mui-ellipsis'><span>时间： {{item.time | dateFormat}}</span><span>点击量： {{item.count}}</span></p>

            <p>{{item.disc}}</p>

            <hr>

            <!-- 评论区 -->
            <div>
                <infocomm-box></infocomm-box>

            </div>


        </div>
	</div>
</template>

<script>

import infocomm from '../infocomm.vue'

export default {
    data(){
        return{
            id : this.$route.params.id,
            item:{}
        }
    },
    components:{
        'infocomm-box':infocomm


    },

    created(){
        setTimeout( () => {
            this.item = {
                title: '广发华福77777',
                time:  '20180207',
                count: 66,
                disc: '户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧户外活动房呵护才能快点吃吧'
            }
        },2000 )
    },
    methods: {

    }


}

</script>

<style scoped>
.mui-media-body{padding: 0 10px;}
.mui-ellipsis{display: flex;justify-content: space-between;}
</style>