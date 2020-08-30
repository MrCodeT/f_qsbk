<template>
	<view class="setP">
		<!-- 输入 -->
		<input password placeholder="输入旧密码" v-model="oldPassword" />
		<input password placeholder="输入新密码" v-model="newPassword" />
		<input password placeholder="输入确认密码" v-model="reNewPassword" />
		<!-- 按钮 -->
		<button type="default" :loading="loading" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword:'',
				newPassword:'',
				reNewPassword: '',
				disabled: true,
				loading: false
			}
		},
		watch: {
			oldPassword(val) {
				this.change()
			},
			newPassword(val) {
				this.change()
			},
			reNewPassword(val) {
				this.change()
			}
		},
		methods: {
			// 监听
			change() {
				if(this.oldPassword && this.newPassword && this.reNewPassword) {
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 验证层
			check() {
				// 添加了禁用按钮的条件，验证层有些判断就不需要了
				if(!this.oldPassword) {
					uni.showToast({
						title: '输一下旧密码呗'
					});
					return false
				}else if(!this.newPassword) {
					uni.showToast({
						title: '输一下新密码呗'
					});
					return false
				}else if(this.oldPassword == this.newPassword) {
					uni.showToast({
						title: '你没改密码呀'
					});
				}else if(!this.reNewPassword) {
					uni.showToast({
						title: '再来一次新密码'
					});
					return false
				}else if(this.reNewPassword != this.newPassword) {
					uni.showToast({
						title: '两次密码不像呀'
					});
					return false
				}
				return true
			},
			// 提交
			submit() {
				this.loading = true,
				this.disabled = true
				if(this.check()) {
					uni.showToast({
						title: '修改成功'
					});
					this.loading = false
					this.disabled = false
				}else {
					this.loading = false
					this.disabled = false
				}
			}
		}
	}
</script>

<style>
	.setP {
		padding: 0 30upx;
	}
	input {
		border-bottom: 1px solid #F2F2F2;
		padding: 30upx 0;
	}
	button {
		margin: 30upx;
		background-color: #FFD620 !important;
	}
</style>
