<template>
	<view class="login f_a_jb" @tap="goSpace">
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
		},
		methods: {
			// 进入个人空间
			goSpace() {
				uni.navigateTo({
					url: '../../pages/space/space/space'
				});
			}
		}
	}
</script>

<style scoped>
	.login {
		margin-bottom: 40upx;
	}
	.login view image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-right: 15upx;
	}
	.login .center {
		text-align: left;
	}
	.login .center .name {
		font-size: 35upx;
	}
	.login .center .day {
		color: #A5A5A5;
	}
</style>
