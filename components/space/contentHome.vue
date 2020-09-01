<template>
	<view class="coenter_home">
		<view class="top">
			<view>账号信息</view>
			<view>糗龄：{{getTime}}</view>
			<view>糗百ID：{{userInfo.id}}</view>
		</view>
		<view class="bottom">
			<view>个人信息</view>
			<view>星座：{{getXingZu}}</view>
			<view>职业：{{userInfo.job}}</view>
			<view>故乡：{{userInfo.home}}</view>
			<view>情感状态：{{userInfo.ganqing}}</view>
		</view>
	</view>
</template>

<script>
	import time from '../../common/time.js'
	export default {
		props: {
			userInfo: Object
		},
		computed: {
			getTime() {
				return time.gettime.sumAge(this.userInfo.regtime)
			},
			getXingZu() {
				return time.gettime.getHoroscope(this.userInfo.birthday)
			}
		}
	}
</script>

<style scoped>
	.top,.bottom {
		border-bottom: 1px solid #EEEEEE;
		padding: 30upx 0;
		margin: 0 30upx;
	}
	.top view,.bottom view {
		color: #ABABAB;
	}
	.top view:first-child,.bottom view:first-child {
		font-size: 35upx;
		font-weight: bold;
		color: #000000;
		
	}
</style>
