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
		margin: 20upx;
		border-top: 1px solid #F2F2F2;
		border-bottom: 1px solid #F2F2F2;
		padding: 20upx 0;
	}
	.hot .right{
		color: #dfe4ea;
	}
	.bottom{
		margin: 10upx;
	}
	.bottom view {
		background-color: #F7F7F7;
		color: #A1A1A1;
		width: 100upx;
		height: 60upx;
		font-size: 30upx;
		line-height: 60upx;
		text-align: center;
		border-radius: 15upx;
	}
</style>
