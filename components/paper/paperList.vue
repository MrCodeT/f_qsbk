<template>
	<view class="paperWrap f animated bounceIn" @tap="goChat(item)">
		<view class="left">
			<image :src="item.img" mode="widthFix"></image>
		</view>
		<view class="right">
			<view class="top f_a_jb">
				<view class="name">{{item.name}}</view>
				<view class="time">{{item.time}}</view>
			</view>
			<view class="bottom f_a_jb">
				<view class="content">{{item.content}}</view>
				<badge :text='item.num' type="error" />
			</view>
		</view>
	</view>
</template>

<script>
	import Badge from '../../components/uni-badge/uni-badge.vue'
	export default {
		components:{Badge},
		props: {
			item: Object
		},
		methods: {
			goChat(item) {
				this.$emit('goChat',item)
			}
		}
	}
</script>

<style scoped>
	.paperWrap {
		border-bottom: 1px solid #F0F0F0;
		padding-bottom: 30upx;
	}
	.left {
		margin-top: 30upx;
		flex-shrink: 0;
	}
	.left image {
		width: 120upx;
		border-radius: 50%;
		margin-right: 25upx;
	}
	.right {
		flex: 1;
	}
	.top {
		margin-top: 30upx;
	}
	.name {
		font-size: 40upx;
	}
	.time {
		color: #D6D6D6;
	}
	.content {
		width: 400upx;
		color: #A3A3A3;
		font-size: 30upx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>
