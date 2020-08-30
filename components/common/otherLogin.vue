<template>
	<view class="type f_a_ja">
		<block v-for="(item,index) in other">
			<view class="item"><view class="icon iconfont f_a_ja" :class="item.icon" :style="{backgroundColor: item.color}"></view></view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			other: Array
		}
	}
</script>

<style scoped>
	.item {
		text-align: center;
		color: #FFFFFF;
		margin-bottom: 40upx;
	}
	 .item view {
		font-size: 70upx;
		border-radius: 50%;
		width: 150upx;
		height: 150upx;
	}
</style>
