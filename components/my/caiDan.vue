<template>
	<view class="caidan_item f_a_jb" hover-class="avtive" @click="goPage(item)">
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
			// 点击事件
			goPage(item) {
				// 页面跳转
				uni.navigateTo({
					url: this.item.url
				});
				// 清楚缓存
				if(item.tit == '清除缓存') {
					uni.showModal({
						title: '提示',
						content: '是否要清除缓存？',
						cancelText: '取消',
						confirmText: '立刻清除',
						success: res => {
							if(res.confirm) {
								uni.clearStorage();
								uni.showToast({
									title: '清除缓存成功！'
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}
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
