<template>
	<view class="charWrap">
		<view class="time">{{item.getTime}}</view>
		<view class="chatList f_a_jb" :class="[item.isMe?'listMe':'']">
			<view class="img" v-if="!item.isMe">
				<image :src="item.img" mode="widthFix" lazy-load></image>
			</view>
			<view class="f_a" :class="[item.isMe?'me':'content']">{{item.content}}</view>
			<view class="imgMe" v-if="item.isMe">
				<image :src="item.img" mode="widthFix" lazy-load></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		}
	}
</script>

<style scoped>
	.time {
		text-align: center;
		margin-top: 60rpx;
		color: #A3A3A3;
	}
	.chatList {
		margin-top: 70rpx;
	}
	.img {
		position: relative;
		top: -20rpx;
	}
	.img image {
		width: 120rpx;
		height: 120rpx;
		margin: 0 30rpx 0 20rpx;
		border-radius: 50%;
	}
	.content {
		margin-right: 170rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx 25rpx 20rpx 0;
		background-color: #F4F4F4;
	}
	.content::before {
		content: '';
		position: relative;
		top: -10rpx;
		left: -40rpx;
		border: 22rpx solid #F4F4F4;
		border-color: transparent #F4F4F4 transparent transparent;
	}
	.imgMe image {
		width: 120rpx;
		height: 120rpx;
		margin: 0 20rpx 0 30rpx;
		border-radius: 50%;
	}
	.me {
		margin-left: 170rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx 0 20rpx 40rpx;
		background-color: #F4F4F4;
	}
	.listMe {
		justify-content: flex-end;
	}
	.me::after {
		content: '';
		position: relative;
		top: -10rpx;
		left: 42rpx;
		border: 22rpx solid #F4F4F4;
		border-color: transparent transparent transparent #F4F4F4;
	}
</style>
