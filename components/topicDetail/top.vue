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
		height: 300upx;
		overflow: hidden;
	}
	.top image {
		width: 100%;
		filter: blur(15upx);
	}
	.content {
		padding: 0 30upx;
	}
	.c_top image {
		width: 200upx;
		border-radius: 20upx;
		margin: -100upx 20upx 20upx 0;
	}
	.c_top view {
		font-size: 40upx;
	}
	.c_center {
		color: #D1D1D1;
		margin-bottom: 20upx;
	}
	.c_bottom {
		color: #A3A3A3;
		font-size: 30upx;
	}
</style>
