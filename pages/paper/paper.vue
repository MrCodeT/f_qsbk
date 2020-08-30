<template>
	<view class="body">
		<!-- 蒙版 -->
		<view class="mengban" @tap="mb" v-show="show"></view>
		<!-- 菜单 -->
		<paper-menu @add="add" @no="no" :show="show" />
		<!-- 聊天列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list @goChat="goChat" :item="item" />
		</block>
		<!-- 上拉加载更多 -->
		<load-more :loadText="loadText" />
	</view>
</template>

<script>
	import paperList from '../../components/paper/paperList.vue'
	import loadMore from '@/components/common/loadMore.vue'
	import paperMenu from '../../components/paper/paperMenu.vue'
	export default {
		components: {paperMenu,paperList,loadMore},
		data() {
			return {
				show: false,
				loadText: '上拉加载更多',
				list:[
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'小艾',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'埃特曼',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					}
				]
			}
		},
		//页面触底事件---上拉刷新
		onReachBottom() {
			this.reachBottom()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.pullDownRefresh()
		},
		// 点击导航栏的+号
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				console.log('朋友')
					break;
				case 1:
				this.showMenu()
					break;
			}
		},
		methods: {
			// 上拉加载
			reachBottom() {
				if(this.loadText !== '上拉加载更多') return
				this.loadText = '加载中...'
				setTimeout(()=>{
					let obj = {
							img:'../../static/img/12.jpg',
							name:'小艾',
							time:'7:36',
							content:'内容内容内容内容内容内容内容内容内容内容内容',
							num: '99'
						}
					this.list.push(obj)
					this.loadText = '上拉加载更多'
				},1500)
			},
			// 下拉刷新
			pullDownRefresh() {
				setTimeout(()=>{
					this.list = [
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					},
					{
						img:'../../static/img/12.jpg',
						name:'子川',
						time:'13:58',
						content:'内容内容内容内容内容内容内容内容内容内容内容',
						num: '32'
					}
				],
				uni.stopPullDownRefresh()
				},1500)
			},
			// 点击加糗友
			add() {
				console.log('加糗友')
				this.hiddMenu()
			},
			// 点击消息未读
			no() {
				console.log('消息未读')
				this.hiddMenu()
			},
			// 点击其他地方（蒙版）
			mb() {
				this.hiddMenu()
			},
			// 隐藏菜单
			showMenu() {
				this.show = true
			},
			// 显示菜单
			hiddMenu() {
				this.show = false
			},
			// 进入聊天页
			goChat(item) {
				uni.navigateTo({
					url: '../chat/chat?name=' + item.name,
				});
			}
		}
	}
</script>
<style>
	.body {
		padding: 0 30upx;
	}
	.mengban {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 1999;
	}
</style>
