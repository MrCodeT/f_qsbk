<template>
	<view>
		<!-- 模糊背景图 -->
		<view class="top">
			<image :src="list.img" mode="aspectFill"></image>
		</view>
		<view class="content">
			<view class="c_top f">
				<image :src="list.img" mode="widthFix"></image>
				<view>{{list.tit}}</view>
			</view>
			<view class="c_center">动态{{list.dongtainum}} 今日{{list.jinrinum}}</view>
			<view class="c_bottom">{{list.content}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Object
		}
	}
</script>

<style scoped>
.top {
		width: 100%;
		height: 300rpx;
		overflow: hidden;
	}
	.top image {
		width: 100%;
		filter: blur(15rpx);
	}
	.content {
		padding: 0 30rpx;
	}
	.c_top image {
		width: 200rpx;
		border-radius: 20rpx;
		margin: -100rpx 20rpx 20rpx 0;
	}
	.c_top view {
		font-size: 40rpx;
	}
	.c_center {
		color: #D1D1D1;
		margin-bottom: 20rpx;
	}
	.c_bottom {
		color: #A3A3A3;
		font-size: 30rpx;
	}
</style>
