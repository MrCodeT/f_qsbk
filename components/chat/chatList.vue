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
		margin-top: 60upx;
		color: #A3A3A3;
	}
	.chatList {
		margin-top: 70upx;
	}
	.img {
		position: relative;
		top: -20upx;
	}
	.img image {
		width: 120upx;
		height: 120upx;
		margin: 0 30upx 0 20upx;
		border-radius: 50%;
	}
	.content {
		margin-right: 170upx;
		border-radius: 20upx;
		box-sizing: border-box;
		padding: 20upx 25upx 20upx 0;
		background-color: #F4F4F4;
	}
	.content::before {
		content: '';
		position: relative;
		top: -10upx;
		left: -40upx;
		border: 22upx solid #F4F4F4;
		border-color: transparent #F4F4F4 transparent transparent;
	}
	.imgMe image {
		width: 120upx;
		height: 120upx;
		margin: 0 20upx 0 30upx;
		border-radius: 50%;
	}
	.me {
		margin-left: 170upx;
		border-radius: 20upx;
		box-sizing: border-box;
		padding: 20upx 0 20upx 40upx;
		background-color: #F4F4F4;
	}
	.listMe {
		justify-content: flex-end;
	}
	.me::after {
		content: '';
		position: relative;
		top: -10upx;
		left: 42upx;
		border: 22upx solid #F4F4F4;
		border-color: transparent transparent transparent #F4F4F4;
	}
</style>
