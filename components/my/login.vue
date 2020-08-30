<template>
	<view class="login f_a_jb">
		<view class="f">
			<image :src="login.img" mode="widthFix"></image>
			<view class="center">
				<view class="name">{{login.name}}</view>
				<view class="day">总访客 {{login.people}} 今日 {{login.day}}</view>
			</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			login: Object
		}
	}
</script>

<style scoped>
	.login {
		margin-bottom: 40rpx;
	}
	.login view image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin-right: 15rpx;
	}
	.login .center {
		text-align: left;
	}
	.login .center .name {
		font-size: 35rpx;
	}
	.login .center .day {
		color: #A5A5A5;
	}
</style>
