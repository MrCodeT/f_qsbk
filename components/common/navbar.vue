<template>
	<view class="uni-tab-bar tabbar">
	    <scroll-view scroll-x class="uni-swiper-tab" @scroll="scroll">
				<block v-for="(item, index) in navbars" :key="index">
					<view :style="styleitem" class="swiper-tab-list" :class="{active: index == navbarIndex}" @tap="navbarTap(index)">
						{{item}}
						<view class="line"></view>
					</view>
				</block>
	    </scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			navbars: {
				type: Array,
				default() {
					return []
				}
			},
			navbarIndex: {
				type: Number
			},
			styleitem: {
				type: String,
				default() {
					return ''
				}
			}
		},
		methods: {
			//导航条滚动事件
			scroll(e) {
				console.log(e)
			},
			//点击事件
			navbarTap(index) {
				this.$emit('navbarTap', index)
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		height: 50px;
	}
	.uni-swiper-tab {
		border-bottom: 1upx solid #eeeeff;
		height: 50px;
	}
	.swiper-tab-list {
		color: #969696;
	}
	.active {
		color: #343434 !important;
	}
	.active .line {
		border-top: 6upx solid #FEDE33;
		border-bottom: 6upx solid #FEDE33;
		border-radius: 50upx;
		width: 70upx;
		margin: auto;
	}
</style>
