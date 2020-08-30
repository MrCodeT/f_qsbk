<template>
	<view class="wrapper">
		<!-- 自定义导航栏 -->
		<nav-bar :tabBar = "tabBar" :navbarIndex="navbarIndex" @tabBarClick="tabBarClick" @release="release" />
		<!-- 内容 -->
		<swiper class="swiper-box swiper-wrap" @change="swiperChange" :current="navbarIndex">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y class="list swiper-scroll" @scrolltolower="loadMore">
					<!-- 有内容时 -->
					<template v-if="listData.list.length">
						<!-- 图文列表 -->
						<block v-for="(item,index) in listData.list" :key="index">
							<common-list :item="item" />
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="listData.loadText" />
					</template>
					<!-- 无内容时 -->
					<template v-else>
						<!-- 无内容默认 -->
						<view class="nothing">
							<image src="../../static/img/nothing_03.png" mode="widthFix"></image>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 话题 -->
				<scroll-view scroll-y class="list swiper-scroll" @scrolltolower="loadMore">
					<!-- 搜索框 -->
					<input type="text" class="uni-input search" placeholder="搜索内容" 
					placeholder-class="icon iconfont icon-sousuo pla"/>
					<!-- 轮播图 -->
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<block v-for="(item, index) in topic.lunbo" :key="index">
							<swiper-item>
								<image :src="item.src" mode="widthFix"></image>
							</swiper-item>
						</block>
					</swiper>
					<!-- 热门分类 -->
					<hot @more="more" :hot="topic.hot" />
					<!-- 最近更新 -->
					<view class="new">
						<view class="tt">最新更新</view>
						<block v-for="(item, index) in topic.list" :key="index">
							<nnew :item='item' />
						</block>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import navBar from '../../components/news/navBar.vue'
	import commonList from '../../components/common/commonList.vue'
	import loadMore from '@/components/common/loadMore.vue'
	import hot from '../../components/news/hot.vue'
	import nnew from '../../components/news/new.vue'
	
	export default {
		components: {navBar,commonList,loadMore,hot,nnew},
		data() {
			return {
				navbarIndex: 0,
				tabBar: [
					{id:'guanzhu', title:'关注'},
					{id:'huati', title:'话题'}
				],
				// 模拟关注数据
				listData: {
					loadText: '上拉加载更多',
					list: [
						{
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
						},
						{
							img: '../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: true, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'video', //img:图文,video:视频,share:分享
							video: {
								videopic: '../../static/img/39.jpg',
								playnum: '20w',
								long: '2:47',
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						},
						{
							img: '../../static/img/12.jpg',
							name: '子川',
							sex: 1, //0:男,1:女
							age: 23,
							is_guanzhu: false, // true:关注，false:不关注
							title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
							type: 'share', //img:图文,video:视频,share:分享
							share: {
								sharepic: '../../static/img/39.jpg',
								sharetitle: '在男人角度告诉你,为什么他对你有好感却不追呢'
							},
							address: '深圳 龙岗',
							sharenum: 36,
							commentnum: 37,
							likenum: 958
						}
					],
				},
				topic: {
					lunbo: [
						{src:'../../static/img/banner1.jpg'},
						{src:'../../static/img/banner2.jpg'},
						{src:'../../static/img/banner3.jpg'}
					],
					hot:[
						{id:'zuixin',title:'最新'},
						{id:'youxi',title:'游戏'},
						{id:'情感',title:'情感'},
						{id:'daka',title:'打卡'},
						{id:'gushi',title:'故事'},
						{id:'xiai',title:'喜爱'}
					],
					list: [
						{
							img:'../../static/img/1.jpeg',
							tit:'淘宝记录簿',
							content: '120斤到85斤 我的反转人生',
							dongtainum: '545',
							jinrinum: '720'
						},
						{
							img:'../../static/img/1.jpeg',
							tit:'淘宝记录簿',
							content: '120斤到85斤 我的反转人生',
							dongtainum: '545',
							jinrinum: '720'
						},{
							img:'../../static/img/1.jpeg',
							tit:'淘宝记录簿',
							content: '120斤到85斤 我的反转人生',
							dongtainum: '545',
							jinrinum: '720'
						}
					]
				}
			}
		},
		methods: {
			// 发布
			release() {
				uni.navigateTo({
					url: '../addContent/addContent'
				});
			},
			// 切换tabbar
			tabBarClick(index) {
				this.navbarIndex = index
			},
			// 滑动事件
			swiperChange(e) {
				this.navbarIndex = e.detail.current
			},
			//上拉加载更多
			loadMore() {
				if(this.listData.loadText !== '上拉加载更多') return
				this.listData.loadText = '加载中...'
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
					this.listData.list.push(obj)
					this.listData.loadText = '上拉加载更多'
				},1500)
			},
			// 进入话题分类
			more() {
				uni.navigateTo({
					url: '../topicMore/topicMore',
				});
			}
		}
	}
</script>

<style>
	.wrapper {
		height: 100vh;
	}
	.swiper-wrap {
		height: calc(100% - 68px);
	}
	.list {
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
	.search {
		margin: 20upx;
		border-radius: 10upx;
		background-color: #F4F4F4;
	}
	.pla{
		color: #A1A1A1;
		text-align: center;
	}
	.swiper{
		margin: 20upx;
	}
	.swiper image {
		display: block;
		margin: 0 auto;
		border-radius: 10upx;
	}
	.new{
		margin: 20upx;
	}
	.tt {
		margin-bottom: 20upx;
	}
</style>
