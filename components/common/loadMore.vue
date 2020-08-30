<template>
	<view class="loadText">{{loadText}}</view>
</template>

<script>
	export default {
		props: {
			loadText: String
		}
	}
</script>

<style scoped>
	.loadText {
		text-align: center;
		padding: 10rpx;
		color: #AAAAAA;
	}
</style>
