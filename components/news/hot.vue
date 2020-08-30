<template>
	<view class="hot">
		<view class="top f_a_jb">
			<view class="left">热门分类</view>
			<view class="right f_a" @tap="more">更多<view class="icon iconfont icon-jinru"></view></view>
		</view>
		<view class="bottom f_a_ja">
			<block v-for="(item,index) in hot" :key='item.id'>
				<view>{{item.title}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hot: Array
		},
		methods: {
			// 更多
			more() {
				this.$emit('more')
			}
		}
	}
</script>

<style>
	.hot {
		margin: 20rpx;
		border-top: 1px solid #F2F2F2;
		border-bottom: 1px solid #F2F2F2;
		padding: 20rpx 0;
	}
	.hot .right{
		color: #dfe4ea;
	}
	.bottom{
		margin: 10rpx;
	}
	.bottom view {
		background-color: #F7F7F7;
		color: #A1A1A1;
		width: 100rpx;
		height: 60rpx;
		font-size: 30rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 15rpx;
	}
</style>
