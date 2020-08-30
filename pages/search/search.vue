<template>
	<view>
		<template v-if="listData.list.length">
			<!-- 图文列表 -->
			<block v-for="(item, index) in listData.list" :key="index">
				<index-list :item="item" />
			</block>
			<!-- 上拉加载更多 -->
			<load-more :loadText="listData.loadText" />
			<!-- 占位 -->
			<view class="zhanwei"></view>
		</template>
		<template v-else-if="isGetData && !listData.list.length">
			<!-- 无内容默认 -->
			<view class="nothing">
				<image src="../../static/img/nothing_03.png" mode="widthFix"></image>
			</view>
		</template>
	</view>
</template>

<script>
	import indexList from '@/components/index/indexList.vue'
	import loadMore from '@/components/common/loadMore.vue'
	export default {
		data() {
			return {
				isGetData: false,
				listData: {
					loadText: '上拉加载更多',
					list:[]
					}
				}
		},
		components: {indexList,loadMore},
		// 监听原生导航栏按钮的点击事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		// 监听原生导航栏搜索框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			console.log('搜索框输入内容变化事件',e)
		},
		//监听原生导航栏搜索框搜索事件，用户点击软键盘的搜索按钮时的触发
		onNavigationBarSearchInputConfirmed(e) {
			if(e.text) {
				this.getData()
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getData()
			 uni.stopPullDownRefresh();
		},
		// 上拉触底事件
		onReachBottom() {
			console.log(1)
			this.loadMore()
		},
		methods: {
			// 获取数据
			getData() {
				uni.showLoading({
				    title: '加载中'
				});
				setTimeout(() => {
					let listitem = [{
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
					}]
					this.listData.list = listitem
					uni.hideLoading();
					this.isGetData = true
				},1000)
				
			},
			// 上拉加载更多
			loadMore() {
				console.log(1)
				if(this.listData.loadText !== '上拉加载更多') return
				this.listData.loadText = '加载中...'
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
					this.listData.list.push(obj)
					this.listData.loadText = '上拉加载更多'
				},1500)
			}
		}
	}
</script>

<style>
	.zhanwei {
		height: 50upx;
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
