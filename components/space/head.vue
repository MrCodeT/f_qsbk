<template>
	<view>
		<!-- 资料 -->
		<view class="my f_a">
			<!-- 头像 -->
			<image :src="userInfo.pic" mode="widthFix" lazy-load></image>
			<!-- 姓名、性别 -->
			<view class="nameAndSex f_a">
				<view class="name">{{userInfo.name}}</view>
				<view class="sex f_a" :class="[userInfo.sex?'nv':'nan']">
					<view class="icon iconfont" :class="[userInfo.sex?'icon-nv':'icon-nan']"></view>
					{{userInfo.age}}
				</view>
			</view>
			<!-- 关注 -->
			<view class="guanzhu f_a" @tap="guanzhu"><view class="icon iconfont" 
			:class="[userInfo.is_guanzhu?'':'icon-zengjia']"></view>
			{{userInfo.is_guanzhu?'已关注':'关注'}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: Object
		},
		methods: {
			// 关注
			guanzhu() {
				this.$emit('guanzhu')
			}
		}
	}
</script>

<style scoped>
	.my {
		position: absolute;
		top: 70upx;
		width: 100%;
		flex-direction: column;
		justify-content: center;
	}
	.my image {
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
	}
	.nameAndSex {
		margin: 20upx 0;
	}
	.name {
		color: #FFFFFF;
		font-size: 40upx;
		font-weight: bold;
		text-shadow: 1px 1px 3px #000;
		margin-right: 15upx;
	}
	.sex {
		width: 100upx;
		height: 40upx;
		margin-top: 10upx;
		border-radius: 30upx;
		border: 2px solid #FFFFFF; 
		justify-content: center;
		color: #FFFFFF;
		text-shadow: 1px 1px 3px #000;
	}
	.nv {
		background-color: #FF6A8D;
	}
	.nan {
		background-color: #41A4E7;
	}
	.guanzhu {
		width: 120upx;
		height: 50upx;
		background-color: #FFE933;
		justify-content: center;
		border-radius: 10upx;
	}
</style>
