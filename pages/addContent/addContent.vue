<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :status-bar="true" left-icon="arrowleft" right-text="发布"
		@clickLeft="back" @clickRight="release">
			<view class="center" slot="default" @tap="yinsi">
				{{item}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 内容 -->
		<view class="uni-textarea">
			<textarea placeholder="说一句话吧~" v-model="text" />
		</view>
		<!-- 多图上传 -->
		<upload-images @upload="upload" />
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="center">
			<view class="popup">
				<image src="../../static/img/popup.png" mode="widthFix"></image>
				<view>1、涉及黄色，政治，广告及骚扰信息</view>
				<view>2、涉及人身攻击</view>
				<view>3、留联系方式，透露他人隐私</view>
				<view>一经核实将被封禁，情节严重者或永久封禁</view>
				<button type="default" @tap="close">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import uploadImages from '../../components/common/uploadImages.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	
	export default {
		components: {uniNavBar,uploadImages,uniPopup},
		data() {
			return {
				itemList: ['所有人可见', '仅自己可见'],
				item: '所有人可见',
				text: '',
				isBack: true,
				imgList: []
			}
		},
		mounted() {
			this.open()
		},
		// 监听页面返回
		onBackPress() {
			if(!this.text && this.imgList.length == 0){
				return
			}
			if(this.isBack){
				this.baocun()
				return true
			}
		},
		methods: {
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 发布
			release() {
				console.log('发布')
			},
			//隐私
			yinsi() {
				uni.showActionSheet({
				    itemList: this.itemList,
				    success: res => {
				      this.item = this.itemList[res.tapIndex]
				    }
				});
			},
			// 打开弹窗
			open() {
				this.$refs.popup.open()
			},
			// 关闭弹窗
			close() {
				this.$refs.popup.close()
			},
			//监听上传图片事件
			upload(arr) {
				this.imgList = arr
			},
			//保存草稿
			baocun() {
				uni.showModal({
					title: '提示',
					content: '需要保存次草稿吗？',
					cancelText: '保存',
					confirmText: '不保存',
					success: res => {
						if(res.confirm){
							console.log('不保存草稿')
						}else {
							console.log('保存草稿')
						}
						this.isBack = false
						uni.navigateBack({
							delta: 1
						});
					}
				});
			}
		},
	}
</script>

<style>
	.center {
		display: flex;
		align-items: center;
		margin: 0 auto;
	}
	.uni-textarea {
		height: 500rpx;
	}
	.uni-textarea textarea {
		height: 100%;
	}
	.popup {
		border-radius: 10rpx;
		background-color: #fff;
		padding: 15px;
	}
	.popup image {
		width: 50%;
		display: block;
		margin: 0 auto 30rpx auto;
	}	
	.popup button {
		background-color: #FFE934;
		margin-top: 30rpx;
	}
</style>
