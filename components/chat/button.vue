<template>
	<view class="bottom f_a">
			<input type="text" placeholder="文明发言" v-model="text"/>
			<view class="icon iconfont icon-fabu f_a_ja" @tap="submit"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			// 发布
			submit() {
				this.$emit('submit',this.text)
			}
		}
	}
</script>

<style scoped>
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 130rpx;
		box-sizing: border-box;
		border-top: 1px solid #F4F4F4;
	}
	.bottom input {
		flex: 1;
		height: 80rpx;
		border-radius: 10rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		margin: 0 0 0 30rpx;
		background-color: #F7F7F7;
	}
	.bottom view {
		width: 120rpx;
		font-size: 50rpx;
	}
</style>
