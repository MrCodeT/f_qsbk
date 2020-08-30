<template>
	<view class="setAbout">
		<view class="top f_a">
			<image src="../../static/img/about_03.png" mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<view class="bottom">
			<block v-for="(item,index) in list" :key="index">
				<cai-dan :item="item" />
			</block>
		</view>
	</view>
</template>

<script>
	import caiDan from '../../components/my/caiDan.vue'
	export default {
		components: {caiDan},
		data() {
			return {
				list:[
					{tit:'新版本检测'},
					{tit:'仿糗事百科用户协议'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.setAbout {
		padding: 0 20upx;
	}
	.top {
		margin: 30upx 0;
		flex-direction: column;
	}
	.top image {
		width: 60%;
		margin: 25upx 0;
	}
	.top view {
		text-align: center;
		color: #D2D2D2;
	}
</style>
