<template>
	<view class="index_list animated bounceIn">
		<!-- 顶部 -->
		<view class="top f_a_jb">
			<!-- 左边 -->
			<view class="left f_a">
				<!-- 头像 -->
				<image :src="item.img" mode="widthFix"></image>{{item.name}}
			</view>
			<!-- 右边 -->
			<view class="right f_a" v-show="!item.is_guanzhu" @tap="guanzhu">
				<!-- 关注 -->
				<view class="icon iconfont icon-zengjia">关注</view>
			</view>
		</view>
		<!-- 标题 -->
		<view class="title" @tap="goInfo">
			{{item.title}}
		</view>
		<!-- 图片/视频 -->
		<view class="content f_a_ja" @tap="goInfo">
			<!-- 图片 -->
			<image src="/static/img/39.jpg" mode="widthFix"></image>
			<!-- 视频 -->
			<template v-if="item.type == 'video'">
				<view class="play icon iconfont icon-bofang"></view>
				<view class="playinfo">{{item.playnum}}次播放 {{item.long}}</view>
			</template>
		</view>
		<!-- 底部 -->
		<view class="bottom f_a_jb">
			<!-- 左边 -->
			<view class="left f_a">
				<!-- 顶 -->
				<view class="ding f_a" @tap="caozuo('ding')">
					<view class="icon iconfont icon-icon_xiaolian-mian" :class="{active: item.infonum.index == 1}"></view>
					{{item.infonum.dingnum}}
				</view>
				<!-- 踩 -->
				<view class="cai f_a" @tap="caozuo('cai')">
					<view class="icon iconfont icon-kulian" :class="{active: item.infonum.index == 2}"></view>
					{{item.infonum.cainum}}
				</view>
			</view>
			<!-- 右边 -->
			<view class="right f_a">
				<!-- 评论 -->
				<view class="comment f_a">
					<view class="icon iconfont icon-pinglun1"></view>{{item.commentnum}}
				</view>
				<!-- 分享 -->
				<view class="share f_a">
					<view class="icon iconfont icon-zhuanfa"></view>{{item.sharenum}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			//关注
			guanzhu() {
				this.item.is_guanzhu = true
				uni.showToast({
					title: '关注成功'
				});
			},
			// 顶/踩
			caozuo(type) {
				switch (type){
					case 'ding':
					if(this.item.infonum.index == 1) return
					this.item.infonum.dingnum ++
					if(this.item.infonum.index == 2){
						this.item.infonum.cainum --
					}
					this.item.infonum.index = 1
						break;
					case 'cai':
					if(this.item.infonum.index == 2) return
					this.item.infonum.cainum ++
					if(this.item.infonum.index == 1){
						this.item.infonum.dingnum --
					}
					this.item.infonum.index = 2
						break;
				}
			},
			// 进入详情页
			goInfo() {
				this.$emit('goInfo')
			}
		}
	}
</script>

<style>
	.index_list {
		padding: 30rpx;
		border-bottom: 1px solid #F0F0F0;
	}
	.index_list>.top>.left {
		color: #989898;
	}
	.index_list>.top>.left>image {
		width: 100rpx;
		border-radius: 50%;
		margin-right: 15rpx;
	}
	.index_list>.top>.right {
		height: 50rpx;
		padding: 10rpx 20rpx;
		border-radius: 4px;
		background-color: #F4F4F4;
	}
	.index_list>.title {
		font-size: 35rpx;
		margin: 20rpx 0;
	}
	.index_list>.content {
		position: relative;
	}
	.index_list>.content>image {
		width: 100%;
		border-radius: 20rpx;
	}
	.index_list>.content>.play {
		position: absolute;
		color: #fff;
		font-size: 150rpx;
	}
	.index_list>.content>.playinfo {
		position: absolute;
		bottom: 10rpx;
		right: 10rpx;
		border-radius: 50rpx;
		padding: 0 25rpx;
		font-size: 25rpx;
		color: #fff;
		background-color: rgba(0,0,0,.7);
	}
	.index_list>.bottom>view>view, .index_list>.bottom>view>view>view {
		margin-right: 15rpx;
	}
	.active {
		color: #FEDE33;
	}
</style>
