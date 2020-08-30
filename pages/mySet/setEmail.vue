<template>
	<view class="setE">
		<!-- 输入 -->
		<input type="text" placeholder="输入你要绑定的邮箱" v-model="email" />
		<input password placeholder="输入密码" v-model="password" />
		<!-- 按钮 -->
		<button type="default" :loading="loading" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				disabled: true,
				loading: false
			}
		},
		watch: {
			email(val) {
				this.change()
			},
			password(val) {
				this.change()
			}
		},
		methods: {
			// 监听
			change() {
				if(this.email && this.password) {
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 验证层
			check() {
				// 添加了禁用按钮的条件，验证层有些判断就不需要了
				if(!this.email) {
					uni.showToast({
						title: '输入邮箱呀'
					});
					return false
				}else if(!this.password) {
					uni.showToast({
						title: '输入密码呀'
					});
					return false
				}
				return true
			},
			// 提交
			submit() {
				this.loading = true
				this.disabled = true
				if(this.check()){
					uni.showToast({
						title: '绑定成功'
					});
					this.loading = false
					this.disabled = false
				}
			}
		}
	}
</script>

<style>
	.setE {
		padding: 0 30rpx;
	}
	input {
		border-bottom: 1px solid #F2F2F2;
		padding: 30rpx 0;
	}
	button {
		margin: 30rpx;
		background-color: #FFD620 !important;
	}
</style>
