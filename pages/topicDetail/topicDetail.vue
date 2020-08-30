<template>
	<view class="detailWrap">
		<!-- 话题介绍 -->
		<top :list="list" />
		<!-- 顶部导航 -->
		<nav-bar styleitem='width:50%' :navbars="navbars" :navbarIndex="navbarIndex" @navbarTap="navbarTap" />
		<!-- 内容 -->
		<swiper class="swiper-box swiper-wrap" @change="swiperChange" :current="navbarIndex">
			<block v-for="(items, index) in listData" :key="index">
				<swiper-item>
					<scroll-view scroll-y class="list swiper-scroll" @scrolltolower="loadMore(index)">
						<!-- 有内容时 -->
						<template v-if="items.list.length">
							<!-- 图文列表 -->
							<block v-for="(item, index) in items.list" :key="index">
								<common-list :item="item" />
							</block>
							<!-- 上拉加载更多 -->
							<load-more :loadText="items.loadText" />
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
			</block>
		</swiper>
	</view>
</template>

<script>
	import top from '../../components/topicDetail/top.vue'
	import navBar from '@/components/common/navbar.vue'
	import commonList from '../../components/common/commonList.vue'
	import loadMore from '@/components/common/loadMore.vue'
	export default {
		components: {top,navBar,commonList,loadMore},
		data() {
			return {
				list: {
					img: '../../static/img/1.jpeg',
					tit: '#淘宝记录簿#' ,
					dongtainum: 545,
					jinrinum: 720,
					content: '120斤到85斤 我的反转人生'
				},
				
				//选中的navbar
				navbarIndex: 0,
				//navbar
				navbars: ['默认','最新'],
				listData: [
					{
						loadText: '上拉加载更多',
						list:[{img: '../../static/img/12.jpg',
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
								likenum: 958},{img: '../../static/img/12.jpg',
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
								likenum: 958}]
					},
					{
						loadText: '上拉加载更多',
						list:[{img: '../../static/img/12.jpg',
								name: '子川111',
								sex: 1, //0:男,1:女
								age: 23,
								is_guanzhu: false, // true:关注，false:不关注
								title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
								type: 'img', //img:图文,video:视频,share:分享
								pic: '../../static/img/39.jpg',
								address: '深圳 龙岗',
								sharenum: 36,
								commentnum: 37,
								likenum: 958},{img: '../../static/img/12.jpg',
								name: '子川222',
								sex: 0, //0:男,1:女
								age: 23,
								is_guanzhu: false, // true:关注，false:不关注
								title: '六道快手家常菜,真真真真真真真真真真真真好吃~~~',
								type: 'img', //img:图文,video:视频,share:分享
								pic: '../../static/img/39.jpg',
								address: '深圳 龙岗',
								sharenum: 36,
								commentnum: 37,
								likenum: 958}]
					}
				]
			}
		},
		methods: {
			// 点击事件
			navbarTap(index) {
				this.navbarIndex = index
			},
			// 滑动事件
			swiperChange(e) {
				this.navbarIndex = e.detail.current
			},
			loadMore(index) {
				if(this.listData[index].loadText !== '上拉加载更多') return
				this.listData[index].loadText = '加载中...'
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
								likenum: 958,
					}
					this.listData[index].list.push(obj)
					this.listData[index].loadText = '上拉加载更多'
				},1500)
			}
		}
	}
</script>

<style>
	.detailWrap {
		height: 100vh;
	}
	.swiper-wrap {
		height: calc(100% - 620rpx);
	}
	.list {
		height: 100%;
	}
	.nothing {
		height: 100%;
	}
	.nothing image {
		width: 500rpx;
		height: 500rpx;
		display: block;
		position: absolute;
		margin: auto;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
</style>
