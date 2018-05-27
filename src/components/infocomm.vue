<template>
	<div class="infocomm-section">
		<h3>提交评论</h3>
        <hr>
        <textarea maxlength="120" name="" id="" cols="1" rows="4" placeholder="120字以内">

        </textarea>
        <mt-button type="primary" size="large">发表</mt-button>

        <ul>

            <li v-for="(item, n) in info" :key="n" >
                <p>{{item.title}}</p>
                <div><span>时间：{{item.time | dateFormat}}</span><span>点击：{{item.count}}</span></div>
            </li>

        </ul>


	</div>
</template>

<script>

export default {
    data(){
        return{
            info: [
                {
                    title: '广发华福11111',
                    time:  '20180207',
                    count: 27
                }
            ]
        }
    },
    created(){
        setTimeout( () => {
            
        },2000 )
    },
    methods: {

    }


}

</script>

<style scoped>
li>p{width: 100%;}
li>div{display: flex;justify-content: space-between;}

</style>