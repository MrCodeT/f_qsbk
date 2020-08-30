<template>
	<view class="morewrap">
		<!-- 顶部导航 -->
		<nav-bar :navbars="navbars" :navbarIndex="navbarIndex" @navbarTap="navbarTap" />
		<!-- 可滑动内容 -->
		<swiper class="swiper-box swiper-wrap" @change="swiperChange" :current="navbarIndex">
			<block v-for="(items, index) in listData" :key="index">
				<swiper-item>
					<scroll-view scroll-y class="list swiper-scroll" @scrolltolower="loadMore(index)">
						<!-- 有内容时 -->
						<template v-if="items.list.length">
							<!-- 话题列表 -->
							<block v-for="(item, index) in items.list" :key="index">
								<nnew :item="item" />
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
	import navBar from '../../components/common/navbar.vue'
	import nnew from '../../components/news/new.vue'
	import loadMore from '@/components/common/loadMore.vue'
	
	export default {
		components: {navBar,nnew,loadMore},
		data() {
			return {
				//选中的navbar
				navbarIndex: 0,
				//navbar
				navbars: ['关注','推荐','体育','热点','财经','美食','娱乐'],
				listData: [
					{
						loadText: '上拉加载更多',
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
						]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
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
						]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
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
						]},{
						loadText: '上拉加载更多',
						list: []
					},{
						loadText: '上拉加载更多',
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
						]}
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
			//上拉加载更多
			loadMore(index) {
				if(this.listData[index].loadText !== '上拉加载更多') return
				this.listData[index].loadText = '加载中...'
				setTimeout(() => {
					let obj = {
								img:'../../static/img/1.jpeg',
								tit:'淘宝记录簿',
								content: '120斤到85斤 我的反转人生',
								dongtainum: '545',
								jinrinum: '720'
							}
					this.listData[index].list.push(obj)
					this.listData[index].loadText = '上拉加载更多'
				},1500)
			}
		}
	}
</script>

<style>
	.morewrap {
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
