<template>
	<view class="wrapper">
		<!-- 顶部导航 -->
		<nav-bar :navbars="navbars" :navbarIndex="navbarIndex" @navbarTap="navbarTap" />
		<!-- 可滑动的内容 -->
		<swiper class="swiper-box swiper-wrap" @change="swiperChange" :current="navbarIndex">
			<block v-for="(items, index) in listData" :key="index">
				<swiper-item>
					<scroll-view scroll-y class="list swiper-scroll" @scrolltolower="loadMore(index)">
						<!-- 有内容时 -->
						<template v-if="items.list.length">
							<!-- 图文列表 -->
							<block v-for="(item, index) in items.list" :key="index">
								<index-list :item="item" @goInfo="goInfo(item)" />
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
	import navBar from '@/components/common/navbar.vue'
	import indexList from '@/components/index/indexList.vue'
	import loadMore from '@/components/common/loadMore.vue'
	
	export default {
		components: {indexList,navBar,loadMore},
		data() {
			return {
				//选中的navbar
				navbarIndex: 0,
				//navbar
				navbars: ['关注','推荐','体育','热点','财经','美食','娱乐'],
				//模拟首页用户数据
				listData: [
					{
						loadText: '上拉加载更多',
						list:[{
						img: '/static/img/12.jpg',
						name: '子川',
						is_guanzhu: false, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'img', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 0, //0:没表示，1:顶，2:踩
							dingnum: 1000,
							cainum: 50
						},
						commentnum: 200,
						sharenum: 70
						},{
						img: '/static/img/12.jpg',
						name: '小智',
						is_guanzhu: true, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'video', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 1, //0:没表示，1:顶，2:踩
							dingnum: 7,
							cainum: 7
						},
						commentnum: 7,
						sharenum: 7
					}]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
						list:[{
						img: '/static/img/12.jpg',
						name: '子川',
						is_guanzhu: false, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'img', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 0, //0:没表示，1:顶，2:踩
							dingnum: 1000,
							cainum: 50
						},
						commentnum: 200,
						sharenum: 70
						},{
						img: '/static/img/12.jpg',
						name: '小智',
						is_guanzhu: true, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'video', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 1, //0:没表示，1:顶，2:踩
							dingnum: 7,
							cainum: 7
						},
						commentnum: 7,
						sharenum: 7
					}]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
						list:[{
						img: '/static/img/12.jpg',
						name: '子川',
						is_guanzhu: false, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'img', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 0, //0:没表示，1:顶，2:踩
							dingnum: 1000,
							cainum: 50
						},
						commentnum: 200,
						sharenum: 70
						},{
						img: '/static/img/12.jpg',
						name: '小智',
						is_guanzhu: true, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'video', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 1, //0:没表示，1:顶，2:踩
							dingnum: 7,
							cainum: 7
						},
						commentnum: 7,
						sharenum: 7
					}]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
						list:[{
						img: '/static/img/12.jpg',
						name: '子川',
						is_guanzhu: false, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'img', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 0, //0:没表示，1:顶，2:踩
							dingnum: 1000,
							cainum: 50
						},
						commentnum: 200,
						sharenum: 70
						},{
						img: '/static/img/12.jpg',
						name: '小智',
						is_guanzhu: true, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'video', //img:图片，video:视频
						playnum: '20w',
						long: '2:47',
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 1, //0:没表示，1:顶，2:踩
							dingnum: 7,
							cainum: 7
						},
						commentnum: 7,
						sharenum: 7
					}]}
				]
			}
		},
		onLoad() {
		},
		// 监听原生导航栏搜索框的点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		// 监听原生导航栏按钮的点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 1:
				uni.navigateTo({
					url: '../addContent/addContent',
				});
					break;
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
			//上拉加载更多
			loadMore(index) {
				if(this.listData[index].loadText !== '上拉加载更多') return
				this.listData[index].loadText = '加载中...'
				setTimeout(() => {
					let obj = {
						img: '/static/img/12.jpg',
						name: '子川',
						is_guanzhu: false, // true:关注，false:不关注
						title: '如何用手账改变你的一生？',
						type: 'img', //img:图片，video:视频
						contentImg: '', //图片地址/视频封面
						infonum: {
							index: 0, //0:没表示，1:顶，2:踩
							dingnum: 1000,
							cainum: 50
						},
						commentnum: 200,
						sharenum: 70
					}
					this.listData[index].list.push(obj)
					this.listData[index].loadText = '上拉加载更多'
				},1500)
			},
			// 前往详情页
			goInfo(item) {
				uni.navigateTo({
					url: '../detail/detail?detailItem=' + JSON.stringify(item)
				});
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 100vh;
	}
	.swiper-wrap {
		height: calc(100% - 50px);
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
