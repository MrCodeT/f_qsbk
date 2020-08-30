<template>
	<view class="setFB">
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="(item,index) in list" :key="index" :title="item.title" :show-animation="true">
				<text class="content">{{ item.content }}</text>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {uniCollapse,uniCollapseItem},
		data() {
			return {
				list: [
					{title:'客服什么时候上线？',content:'亲爱的糗友，我们没有客服。'},
					{title:'忘记帐号/昵称/密码怎么办？',content:'只能卸载软件了。'},
					{title:'怎么搜索/查找、关注/取消用户？',content:'我们致力做一款不能交友的交友软件。'}
				]
			}
		},
		methods: {
			// 提交
		}
	}
</script>

<style>
	.setFB {
		padding: 0 30upx;
	}
</style>
