<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="{height:contentH+'px'}"
		 :scroll-top="scrollTop" :scroll-with-animation="true" >
			<block v-for="(item,index) in list" :key="index">
				<chat-list :item="item" />
			</block>
		</scroll-view>
		<!-- 底部输入 -->
		<chat-button ref='chatbutton' @submit="submit" />
	</view>	
</template>

<script>
	import chatButton from '../../components/chat/button.vue' 
	import time from '../../common/time.js'
	import chatList from '../../components/chat/chatList.vue'
	export default {
		components:{chatButton,chatList},
		data() {
			return {
				list: [],
				contentH: 0, // 设备高度
				listH: 0, // 内容高度
				scrollTop: 0, // 竖向滚动条位置
			}
		},
		onLoad(options) {
			// 动态改变导航栏标题
			uni.setNavigationBarTitle({
			    title: options.name
			});
			this.getData()
			this.getHeight()
		},
		onReady() {
			this.getContentHeight()
		},
		methods: {
			// 获取设备高度
			getHeight() {
				try {
					const res = uni.getSystemInfoSync();
					this.contentH = res.windowHeight - 65
				} catch (e) {
					// error
				}
			},
			//获取内容高度
			getContentHeight() {
				let query = uni.createSelectorQuery();
				query.selectAll('.charWrap').boundingClientRect();
				query.exec(res => {
					res[0].forEach(item => {
					this.listH += item.height
					})
					if(this.listH > this.contentH) {
						this.scrollTop = this.listH
					}
				})
			},
			// 获取数据，处理时间戳
			getData() {
				// 从服务器获取数据
				let listData=[
					{
						isMe:false,
						img:'../../static/img/12.jpg',
						content: '你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀',
						time: "1597761056"
					},
					{
						isMe:true,
						img:'../../static/img/12.jpg',
						content: '你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀',
						time: "1597761056"
					},
					{
						isMe:true,
						img:'../../static/img/12.jpg',
						content: '你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀你好你好呀',
						time: "1597761956"
					}
				]
				// 循环修改时间戳添加到每一个数据里
				for (let i = 0; i < listData.length; i++) {
					listData[i].getTime = time.gettime.getChatTime(listData[i].time,i>0?listData[i-1].time:0)
				}
				this.list = listData
			},
			// 发布
			submit(text) {
				let now = (new Date()).getTime();
				let obj = {
						isMe:true,
						img:'../../static/img/12.jpg',
						content: text,
						time: now,
						getTime:time.gettime.getChatTime(now,this.list[this.list.length-1].time)
					}
					this.list.push(obj)
					this.$refs.chatbutton.text = ''
					this.getContentHeight()
			}
		}
	}
</script>

<style>

</style>
