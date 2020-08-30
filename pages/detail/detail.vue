<template>
	<view>
		<!-- 详情 -->
		<detail-info :item="list" />
		<!-- 评论 -->
		<view class="plWrap">
			<view class="pinglun">最新评论</view>
			<view style="color: #ccc;">暂无评论</view>
		</view>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detailInfo.vue'
	export default {
		components: {detailInfo},
		data() {
			return {
				isShow: false,
				list: {
					img: '../../static/img/12.jpg',
					name: '子川',
					sex: 0, //0:男,1:女
					age: 23,
					is_guanzhu: false, // true:关注，false:不关注
					title: '如何用手帐改变你的一生？',
					type: 'img', //img:图文,video:视频,share:分享
					pic: '../../static/img/39.jpg',
					picArray:['../../static/img/39.jpg','../../static/img/banner1.jpg'],
					time: '26天前',
					address: '深圳 龙岗',
					sharenum: 36,
					commentnum: 37,
					likenum: 958
				}
			}
		},
		onLoad(e) {
			if(e.detailItem != null) this.setTitle(JSON.parse(e.detailItem).title)
		},
		// 分享
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				plus.share.sendWithSystem({content:'分享内容',href:'https://www.dcloud.io/'}, function(){
						console.log('分享成功');
				}, function(e){
						console.log('分享失败：'+JSON.stringify(e));
				});
			}
		},
		methods: {
			// 改变标题
			setTitle(title) {
				uni.setNavigationBarTitle({
				    title
				});
			},
			// 打开分享和蒙版
			show() {
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style>
	.plWrap {
		box-sizing: border-box;
		padding: 0 20upx;
	}
	.pinglun {
		font-size: 30upx;
		font-weight: bold;
	}
</style>
