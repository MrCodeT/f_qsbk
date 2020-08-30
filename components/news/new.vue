<template>
	<view class="f_a wrap" @tap="goDetail">
		<view class="left">
			<image :src="item.img" mode="widthFix"></image>
		</view>
		<view class="right">
			<view class="tit">#{{item.tit}}#</view>
			<view class="content">{{item.content}}</view>
			<view class="bottom f_a">
				<view>动态{{item.dongtainum}}</view>
				<view>今日{{item.jinrinum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		methods: {
			// 进入详情页
			goDetail() {
				uni.navigateTo({
					url: '../../pages/topicDetail/topicDetail'
				});
			}
		}
	}
</script>

<style scoped>
	.left image {
		width: 200upx;
		border-radius: 10upx;
		margin-right: 25upx;
	}
	.right .tit {
		font-size: 35upx;
	}
	.right .content, .bottom{
		color: #BFBFBF;
		font-size: 25upx;
	}
	.bottom view{
		margin-right: 10upx;
	}
	.wrap{
		border-bottom: 1px solid #F5F5F5;
		padding-bottom: 20upx;
		margin-top: 20upx;
	}
</style>
