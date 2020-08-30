<template>
	<uni-nav-bar :fixed="true" :status-bar="true" @clickRight="release">
		<view class="icon iconfont icon-qiandao left" slot="left"></view>
		<view class="center" slot="default">
			<block v-for="(item,index) in tabBar" :key="item.id">
				<view :class="{active: index == navbarIndex}" @tap="tabBarClick(index)">
					{{item.title}}
					<view class="line"></view>
				</view>
			</block>
		</view>
		<view class="icon iconfont icon-bianji1 right" slot="right"></view>
	</uni-nav-bar>
</template>

<script>
	import uniNavBar from '../uni-nav-bar/uni-nav-bar.vue'
	
	export default {
		components: {uniNavBar},
		props: {
			tabBar:Array,
			navbarIndex:Number
		},
		methods: {
			//切换tabbar
			tabBarClick(index) {
				this.$emit('tabBarClick', index)
			},
			// 发布
			release() {
				this.$emit('release')
			}
		}
	}
</script>

<style scoped>
	.left, .right {
		font-size: 22px;
	}
	.left {
		color: #FF971A;
		margin-left: 10upx;
	}
	.right {
		margin-left: 70upx;
	}
	.center {
		display: flex;
		margin: 0 auto;
	}
	.center view {
		margin: 0 10upx;
		font-size: 35upx;
		color: #969696;
	}
	.active {
		color: #343434 !important;
	}
	.active .line {
		position: relative;
		border-top: 6upx solid #FEDE33;
		border-bottom: 6upx solid #FEDE33;
		border-radius: 50upx;
		margin: auto;
	}
</style>
