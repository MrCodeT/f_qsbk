<template>
	<view class="type f_a_ja">
		<block v-for="(item,index) in other">
			<view class="item" @tap="login(item)"><view class="icon iconfont f_a_ja" :class="item.icon" :style="{backgroundColor: item.color}"></view></view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			other: Array
		},
		data() {
			return {
				providerList: []
			}
		},
		onLoad() {
		},
		methods: {
			// 获取服务商
			getProvider() {
				
			},
			// 登录
			login(item) {
				uni.getProvider({
					service: "oauth",
					success: res => {
						res.provider.forEach(i => {
							if(i == item.name){
								console.log(i)
								uni.login({
									provider: i,
									success: res => {
										console.log(res)
									},
									fail: () => {},
									complete: () => {}
								});
							}
						})
					}
				})
			}
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
