<template>
	<view>
		<!-- 背景图片 -->
		<image class="bgImg" src="../../../static/img/39.jpg" mode="widthFix" lazy-load></image>
		<!-- 头部 -->
		<space-head :userInfo="userInfo" @guanzhu="guanzhu" />
		<!-- 数据 -->
		<view class="data f_a_ja">
			<block v-for="(item, index) in dataList" :key="index">
				<view class="dataList"><view>{{item.count}}</view>{{item.tit}}</view>
			</block>
		</view>
		<!-- 导航栏 -->
		<view class="nav f">
			<block v-for="(item,index) in tabList" :key="index">
				<view @tap="active(index)" :class="[index==tabIndex?'active':'']">
				{{item}}
				<view class="line"></view>
				</view>
			</block>
		</view>
		<!-- 内容 -->
		<swiper class="spaceSwiper" @change="swiperChange" :current="tabIndex">
			<swiper-item>
				<content-home :userInfo="userInfo" />
			</swiper-item>
			<swiper-item>
				<scroll-view class="scroll" scroll-y @scrolltolower="loadMore(1)" >
					<template v-if="listDataOne.list.length">
						<!-- 图文列表 -->
						<block v-for="(item,index) in listDataOne.list" :key="index">
							<common-list :item="item" />
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="listDataOne.loadText" />
					</template>
					<!-- 无内容时 -->
					<template v-else>
						<!-- 无内容默认 -->
						<view class="nothing">
							<image src="../../../static/img/nothing_03.png" mode="widthFix"></image>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="scroll" scroll-y @scrolltolower="loadMore(2)">
					<template v-if="listDataTwo.list.length">
						<!-- 图文列表 -->
						<block v-for="(item,index) in listDataTwo.list" :key="index">
							<common-list :item="item" />
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="listDataTwo.loadText" />
					</template>
					<!-- 无内容时 -->
					<template v-else>
						<!-- 无内容默认 -->
						<view class="nothing">
							<image src="../../../static/img/nothing_03.png" mode="widthFix"></image>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import spaceHead from '../../../components/space/head.vue'
	import contentHome from '../../../components/space/contentHome.vue'
	import commonList from '../../../components/common/commonList.vue'
	import loadMore from '../../../components/common/loadMore.vue'
	export default {
		components: {spaceHead,contentHome,commonList,loadMore},
		data() {
			return {
				userInfo: {
					id: 1213,
					pic:'../../../static/img/12.jpg',
					name: '子川',
					sex: 0, //0:男,1:女
					age: 23,
					is_guanzhu: false,
					birthday: '1997-12-13',
					regtime: '2018-02-02',
					job: 'CV前端工程师',
					home: '江苏省-徐州市-睢宁县',
					ganqing: '已婚'
				},
				dataList: [
					{tit:'获赞',count:'10k'},
					{tit:'关注',count:'11'},
					{tit:'粉丝',count:'12'}
				],
				tabList: ['主页','糗事','动态'],
				tabIndex: 0,
				listDataOne: {
					loadText: '上拉加载更多',
					list: [
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 0, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'img', //img:图文,video:视频,share:分享
							pic: '../../../static/img/39.jpg',
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						},
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: true, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'video', //img:图文,video:视频,share:分享
							video: {
								videopic: '../../../static/img/39.jpg',
								playnum: '20w',
								long: '2:47',
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						},
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'share', //img:图文,video:视频,share:分享
							share: {
								sharepic: '../../../static/img/39.jpg',
								sharetitle: '在男人角度告诉你,为什么他对你有好感却不追呢'
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						}
					],
				},
				listDataTwo: {
					loadText: '上拉加载更多',
					list: [
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 0, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'img', //img:图文,video:视频,share:分享
							pic: '../../../static/img/39.jpg',
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						},
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: true, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'video', //img:图文,video:视频,share:分享
							video: {
								videopic: '../../../static/img/39.jpg',
								playnum: '20w',
								long: '2:47',
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						},
						{
							img: '../../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'share', //img:图文,video:视频,share:分享
							share: {
								sharepic: '../../../static/img/39.jpg',
								sharetitle: '在男人角度告诉你,为什么他对你有好感却不追呢'
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						}
					],
				},
			}
		},
		methods: {
			// 关注
			guanzhu() {
				this. userInfo.is_guanzhu = !this.userInfo.is_guanzhu
			},
			// 点击导航栏
			active(index) {
				this.tabIndex = index
			},
			// 滑动事件
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			//上拉加载更多
			loadMore(num) {
				if(num == 1) {
					if(this.listDataOne.loadText !== '上拉加载更多') return
					this.listDataOne.loadText = '加载中...'
					setTimeout(() => {
						let obj = {
							img: '../../static/img/12.jpg',
							name: '子川',
							sex: 0, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'img', //img:图文,video:视频,share:分享
							pic: '../../static/img/39.jpg',
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						}
						this.listDataOne.list.push(obj)
						this.listDataOne.loadText = '上拉加载更多'
					},1500)
				}else if(num == 2) {
					if(this.listDataTwo.loadText !== '上拉加载更多') return
					this.listDataTwo.loadText = '加载中...'
					setTimeout(() => {
						let obj = {
							img: '../../static/img/12.jpg',
							name: '子川',
							sex: 0, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'img', //img:图文,video:视频,share:分享
							pic: '../../static/img/39.jpg',
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						}
						this.listDataTwo.list.push(obj)
						this.listDataTwo.loadText = '上拉加载更多'
					},1500)
				}
				
			},
		}
	}
</script>

<style>
	.bgImg{
		width: 100%;
		height: 500upx;
		position: relative;
		z-index: -1;
	}
	.data {
		margin-top: -20upx;
		background-color: #FFFFFF;
		border-top-left-radius: 15upx;
		border-top-right-radius: 15upx;
		border-bottom: 30upx solid #F4F4F4;
	}
	.dataList {
		padding: 20upx 0;
		color: #989898;
		font-size: 35upx;
		font-weight: bold;
	}
	.dataList view {
		text-align: center;
		color: #000;
		font-size: 35upx;
		line-height: 30upx;
	}
	.nav {
		padding: 20upx 0;
		font-size: 35upx;
		font-weight: bold;
		color: #979797;
		justify-content: space-around;
	}
	.active {
		color: #000000;
	}
	.active .line {
		height: 10upx;
		background-color: #FEDE33;
		border-radius: 20upx;
	}
	.spaceSwiper {
		height: calc(100vh - 500upx - 180upx);
	}
	.scroll {
		height: 100%;
	}
	.nothing {
		height: 100%;
	}
	.nothing image {
		width: 500upx;
		height: 500upx;
		display: block;
		position: absolute;
		margin: auto;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
</style>
