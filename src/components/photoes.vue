<template>
	<div class="photo-section">
		
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
					<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-5.html">
						娱乐2
					</a>
					<a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-5.html">
						娱乐3
					</a>
					<a class="mui-control-item" href="#item66mobile" data-wid="tab-top-subpage-5.html">
						娱乐4
					</a>
				</div>
			</div>
		</div>

		<ul>
			<li v-for="(item, n) in list" :key="n">
				<img preview="0" :key="n" class="review-img" v-lazy="item">
			</li>

		</ul>
	
	</div>
</template>

<script>

import mui from '../lib/mui/js/mui.js'




export default {
    data(){
        return{
            list: [
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=857208617,3319781484&fm=27&gp=0.jpg',
				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=783340072,1312243264&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg&56666',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=857208617,3319781484&fm=27&gp=0.jpg',
				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=783340072,1312243264&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg&56666',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=857208617,3319781484&fm=27&gp=0.jpg',
				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=783340072,1312243264&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg&56666',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=857208617,3319781484&fm=27&gp=0.jpg',
				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=783340072,1312243264&fm=27&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg&56666',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=597375154,2905536386&fm=27&gp=0.jpg',
			]
        }
    },
    created(){
       
	},
	mounted(){
		//头部nav滑动
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005
		});

    },
    methods: {

    }


}

</script>

<style lang="less">
.photo-section{

	ul {padding:0 20px ;text-align: center;}
	li {line-height: 300px; margin: 30px 0;width: 100%;overflow: hidden;height: 300px;background: #ddd;}

	img[lazy=loaded] {
		width: 100%;
		height: 300px;
		margin: auto;
	}

}
	
</style>