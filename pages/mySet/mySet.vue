<template>
	<view class="setWrap">
		<!-- 列表 -->
		<block v-for="(item,index) in list">
			<cai-dan :item='item' />
		</block>
		<!-- 按钮 -->
		<button type="default">退出登录</button>
	</view>
</template>

<script>
	import caiDan from '../../components/my/caiDan.vue'
	export default {
		components:{caiDan},
		data() {
			return {
				list: [
					{tit:'账号与安全',url:'./setPassword'},
					{tit:'绑定邮箱',url:'./setEmail'},
					{tit:'编辑资料',url:'./setMyInfo'},
					{tit:'小纸条',url:''},
					{tit:'清除缓存',url:''},
					{tit:'帮助',url:'./setFeedBack'},
					{tit:'关于仿糗百',url:''}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.setWrap {
	padding: 0 30upx;
}
button {
	margin: 30upx;
	background-color: #FFD620 !important;
}
</style>
