<template>
	<view>
		<!-- 占位 -->
		<uni-status-bar class="zhanwei"></uni-status-bar>
		<!-- 退出按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 背景图片 -->
		<image class="bgimg" src="../../static/img/login.gif" mode="widthFix" lazy-load></image>
		<!-- 操作 -->
		<view class="loginWrap">
			<!-- 账号密码登录 -->
			<template v-if="mode">
				<view class="textParent">
					<input type="text" placeholder="昵称/手机号/邮箱" placeholder-class="placeholder" v-model="account" />
				</view>
				<view class="passWordParent">
					<input password placeholder="请输入密码" placeholder-class="placeholder" v-model="password" />
					<view class="forget f_a">忘记密码?</view>
				</view>
			</template>
			<!-- 验证码登录 -->
			<template v-else>
				<view class="textParent phoneParent">
					<input type="text" placeholder="输入手机号码" placeholder-class="placeholder" v-model="phone" />
					<view class="phone f_a">+89</view>
				</view>
				<view class="passWordParent yzmParent">
					<input type="text" placeholder="输入验证码" placeholder-class="placeholder" v-model="yzm" />
					<view class="yzm f_a" @tap='getYzm'>{{!codetime?'获取验证码':codetime+' s'}}</view>
				</view>
			</template>
			<!-- 按钮 -->
			<button type="default" :loading="loading" :disabled="disabled" @tap="submit">完成</button>
			<!-- 切换登录方式 -->
			<view class="change">
				<view class="yanzhengma f_a" @tap="modeSwitch">{{mode?'验证码登录':'账号密码登录'}}<view class="icon iconfont icon-jinru"></view></view>
			</view>
			<!-- 第三方登录 -->
			<view class="other f_a">第三方登录</view>
			<other-login :other='other' />
			<!-- agree -->
			<view class="agree">注册仅代表您同意<text>《仿糗事百科用户协议》</text></view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue'
	import otherLogin from '../../components/common/otherLogin.vue'
	export default {
		components: {uniStatusBar,otherLogin},
		data() {
			return {
				loading: false,
				disabled: true,
				account: '',
				password: '',
				phone: '',
				yzm:'',
				other: [
					{name:'weixin',icon:'icon-weixin',color:'#2BD19B'},
					{name:'qq',icon:'icon-QQ',color:'#2CAEFC'},
					{name:'sinaweibo',icon:'icon-xinlangweibo',color:'#FC7729'}
				],
				mode: true,
				codetime: 0
			}
		},
		watch: {
			account(val) {
				this.change()
			},
			password(val) {
				this.change()
			},
			phone(val) {
				this.change()
			},
			yzm(val) {
				this.change()
			}
		},
		methods: {
			// 初始化表单
			initInput() {
				this.account = ''
				this.password = ''
				this.phone = ''
				this.yzm = ''
			},
			// 监听
			change() {
				if((this.account && this.password) || (this.phone && this.yzm)) {
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 切换登陆方式
			modeSwitch() {
				this.initInput()
				this.mode = !this.mode
			},
			// 验证手机号
			isPhone(phone) {
				//手机号正则
				let mPattern = /^1[34578]\d{9}$/;
				if(!mPattern.test(phone)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					});
					return false
				}
				return true
			},
			// 获取验证码
			getYzm() {
				if(this.codetime > 0) return
				if(!this.isPhone(this.phone)) return
				this.codetime = 60
				let timer = setInterval(() => {
					this.codetime--
					if(this.codetime < 1) {
						clearInterval(timer)
						this.codetime = 0
					}
				},1000)
			},
			// 退出
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 登录
			submit() {
				if(this.mode) {
					console.log('账号密码登录')
				}else {
					if(!this.isPhone(this.phone)) return
					console.log('验证码登录')
				}
			}
		}
	}
</script>

<style>
	.zhanwei {
		background-color: #FFE933;
	}
	.bgimg {
		width: 100%;
	}
	.icon-guanbi {
		position: absolute;
		top: 40upx;
		left: 30upx;
		z-index: 99;
		font-size: 40upx;
	}
	.loginWrap {
		padding: 0 30upx;
	}
	input {
		padding: 30upx 0;
	}
	button {
		margin: 30upx;
	}
	.placeholder {
		font-weight: bold;
		color: #CCCCCC;
	}
	.textParent {
		border-bottom: 1px solid #e5e5e5;
	}
	.passWordParent {
		border-bottom: 1px solid #e5e5e5;
		position: relative;
	}
	.passWordParent input {
		padding-right: 150upx;
	}
	.forget {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 150upx;
		z-index: 99;
		justify-content: center;
		font-size: 30upx;
	}
	.yanzhengma,.other {
		justify-content: center;
		padding: 20upx 0;
		font-size: 30upx;
	}
	.other {
		position: relative;
	}
	.other::after,.other::before {
		position: absolute;
		top: 50%;
		content: '';
		height: 1upx;
		width: 100upx;
		background-color: #9D9D9D;
	}
	.other::after {
		left: 150upx;
	}
	.other::before {
		right: 150upx;
	}
	.icon-jinru,.other,.agree {
		color: #9D9D9D;
	}
	.agree {
		text-align: center;
	}
	.agree text {
		color: #46B8FC;
	}
	.phoneParent {
		position: relative;
		padding-left: 80upx;
		border-bottom: 1px solid #e5e5e5;
	}
	.phone {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 80upx;
		font-weight: bold;
		z-index: 99;
		justify-content: center;
		font-size: 35upx;
	}
	.yzmParent {
		border-bottom: 1px solid #e5e5e5;
	}
	.yzm {
		position: absolute;
		right: 0;
		top: 13upx;
		width: 150upx;
		justify-content: center;
		border-radius: 10upx;
		padding: 15upx 0;
		background-color: #F4F4F4;
	}
</style>
