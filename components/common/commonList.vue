<template>
	<view class="commentList f animated bounceIn">
		<view class="c_left">
			<!-- 左边头像 -->
			<image :src="item.img" mode="widthFix"></image>
		</view>
		<!-- 右边 -->
		<view class="c_right">
			<view class="top f_a_jb">
				<!-- 姓名性别 -->
				<view class="name f_a">
					{{item.name}}
					<view class="icon iconfont" :class="[item.sex?'icon-nv nv':'icon-nan nan']">{{item.age}}</view>
				</view>
				<!-- 关注 -->
					<view class="guanzhu icon iconfont icon-zengjia"
					 @tap="guanzhu" v-show="!item.is_guanzhu">关注</view>
			</view>
			<!-- 标题 -->
			<view class="title">{{item.title}}</view>
			<!-- 内容 -->
			<view class="content">
				<!-- 图片 -->
				<template v-if="item.type == 'img'">
					<image :src="item.pic" mode="widthFix"></image>
				</template>
				<!-- 视频 -->
				<template v-if="item.type == 'video'">
					<image :src="item.video.videopic" mode="widthFix"></image>
					<view class="play icon iconfont icon-bofang"></view>
					<view class="playinfo">{{item.video.playnum}}次播放 {{item.video.long}}</view>
				</template>
				
				<!-- 分享 -->
				<template v-if="item.type == 'share'">
					<view class="share f_a_ja">
						<image :src="item.share.sharepic" mode="widthFix"></image>
						{{item.share.sharetitle}}
					</view>
				</template>
				
			</view>
			<view class="bottom f_a_jb">
				<view class="b_left">{{item.address}}</view>
				<view class="b_right f_a">
					<view class="icon iconfont icon-zhuanfa"></view>{{item.sharenum}}
					<view class="icon iconfont icon-pinglun1"></view>{{item.commentnum}}
					<view class="icon iconfont icon-dianzan"></view>{{item.likenum}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		methods: {
			//关注
			guanzhu(item) {
				this.item.is_guanzhu = true
				uni.showToast({
					title: '关注成功'
				});
			}
		}
	}
</script>

<style scoped>
	@import "../../common/detail.css";
</style>
