<template>
	<view class="miWrap">
		<view class="info_item f_a_jb">
			<view class="left">头像</view>
			<view class="right f_a">
				<image src="../../static/img/12.jpg" mode="widthFix"></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">昵称</view>
			<view class="right f_a">
				哈哈<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">性别</view>
			<view class="right f_a">
				男<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">生日</view>
			<view class="right f_a">
				1997.12.13<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">情感</view>
			<view class="right f_a">
				单身<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">职业</view>
			<view class="right f_a">
				CV前端工程师<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">家乡</view>
			<view class="right f_a">
				江苏<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<!-- 按钮 -->
		<button type="default"@tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 提交
			submit() {}
		}
	}
</script>

<style>
	.miWrap {
		padding: 0 30upx;
	}
	.info_item:first-child {
		border-top: 1px solid #F7F7F7;
	}
	.info_item {
		padding: 20upx;
		border-bottom: 1px solid #F7F7F7;
	}
	.info_item .left {
		color: #9B9B9B;
		font-weight: bold;
		font-size: 35upx;
	}
	.info_item .right image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.info_item .right view {
		margin-left: 30upx;
		font-size: 40upx;
		color: #9B9B9B;
	}
	input {
		border-bottom: 1px solid #F2F2F2;
		padding: 30upx 0;
	}
	button {
		margin: 30upx;
		background-color: #FFD620 !important;
	}
</style>
