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
		width: 200rpx;
		border-radius: 10rpx;
		margin-right: 25rpx;
	}
	.right .tit {
		font-size: 35rpx;
	}
	.right .content, .bottom{
		color: #BFBFBF;
		font-size: 25rpx;
	}
	.bottom view{
		margin-right: 10rpx;
	}
	.wrap{
		border-bottom: 1px solid #F5F5F5;
		padding-bottom: 20rpx;
		margin-top: 20rpx;
	}
</style>
