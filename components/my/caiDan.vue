<template>
	<view class="caidan_item f_a_jb" hover-class="avtive" @click="goPage">
		<view class="f_a">
			<view class="icon iconfont" :class="item.icon" :style="{color:item.color}"></view>
			{{item.tit}}
		</view>
		<view class="icon iconfont icon-jinru" style="color: #ccc;"></view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		methods: {
			// 页面跳转
			goPage() {
				uni.navigateTo({
					url: this.item.url
				});
			}
		}
	}
</script>

<style scoped>
	.caidan_item:first-child{
		border-top: 1px solid #e5e5e5;
	}
	.caidan_item {
		height: 120upx;
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
	}
	.caidan_item view {
		margin-right: 10upx;
	}
	.avtive {
		background-color: #e5e5e5;
	}
</style>
