<template>
	<div class="news-section">
		<ul class="mui-table-view">
            <li v-for="(item, n) in news" :key="n" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/'+n">
                    <img class="mui-media-object mui-pull-left" src="../../img/t3-01.png">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'><span>时间： {{item.time | dateFormat}}</span><span>点击量： {{item.count}}</span></p>
                    </div>
                </router-link>
            </li>

        </ul>

	</div>
</template>

<script>

import { Indicator } from 'mint-ui'      //加载
export default {
    data(){
        return{
            news:[]
        }
    },
    created(){
        Indicator.open();
        setTimeout( () => {
            this.getNews();

            Indicator.close();
        }, 2000 )
    },
    methods: {

        getNews(){
            this.news = [
                {
                    title: '广发华福11111',
                    time:  '20180207',
                    count: 27
                },
                {
                    title: '广发华福2222222',
                    time:  '20180208',
                    count: 23
                },
                {
                    title: '广发华福33333333',
                    time:  '20180209',
                    count: 20
                },
                {
                    title: '广发华福77777',
                    time:  '20180207',
                    count: 66
                },
                {
                    title: '广发华福11111',
                    time:  '20180207',
                    count: 27
                },
                {
                    title: '广发华福2222222',
                    time:  '20180208',
                    count: 23
                },
                {
                    title: '广发华福33333333',
                    time:  '20180209',
                    count: 20
                },
                {
                    title: '广发华福77777',
                    time:  '20180207',
                    count: 66
                },
                {
                    title: '广发华福11111',
                    time:  '20180207',
                    count: 27
                },
                {
                    title: '广发华福2222222',
                    time:  '20180208',
                    count: 23
                },
                {
                    title: '广发华福33333333',
                    time:  '20180209',
                    count: 20
                },
                {
                    title: '广发华福77777',
                    time:  '20180207',
                    count: 66
                }
            ]
        }

    }


}

</script>

<style scoped>

.mui-ellipsis{display: flex;justify-content: space-between;}

</style>