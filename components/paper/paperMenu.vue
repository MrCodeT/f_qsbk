<template>
	<view class="menu" v-show="show">
		<view class="f_a" hover-class="active"  @tap="add">
			<view class="icon iconfont icon-sousuo"></view>加糗友
		</view>
		<view class="f_a" hover-class="active" @tap="no">
			<view class="icon iconfont icon-qingchu"></view>清楚未读
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show: Boolean
		},
		methods: {
			// 点击加糗友
			add() {
				this.$emit('add')
			},
			// 点击消息未读
			no() {
				this.$emit('no')
			}
		}
	}
</script>

<style scoped>
	.menu {
		position: fixed;
		right: 0;
		top: 13upx;
		z-index: 2000;
		box-sizing: border-box;
		width: 400upx;
		background-color: #fff;
		border: 1px solid #F0F0F0;
		box-shadow: 3px 3px 8px #E9E9E9,3px -3px 8px #E9E9E9,-3px 3px 8px #E9E9E9,-3px -3px 8px #E9E9E9;
	}
	.menu view {
		padding: 10upx 0 0 20upx;
	}
	.menu view view {
		margin-right: 20upx;
	}
	.active {
		background-color: #ccc;
	}
</style>
