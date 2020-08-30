<template>
	<view class="myWrap">
		<!-- 未登录 -->
		<template v-if="!isLogin">
			<view class="top">登录仿糗百，体验更多功能</view>
			<!-- 第三方登录 -->
			<other :other='other' />
			<!-- 登录 -->
			<view class="bottom f" @tap="goLogin">账号密码登录<view class="icon iconfont icon-jinru" style="color: #ccc;"></view></view>
		</template>
		<!-- 登陆后 -->
		<template v-else>
			<login :login='login' />
		</template>
		<!-- 数据 -->
		<view class="data f_a_ja">
			<block v-for="(item, index) in dataList">
				<view class="dataList"><view>{{item.count}}</view>{{item.tit}}</view>
			</block>
		</view>
		<!-- 广告位 -->
		<view class="adv"><image src="../../static/img/demo20.jpg" mode="widthFix"></image></view>
		<!-- 菜单 -->
		<view class="caidan">
			<block v-for="(item,index) in caiDan">
				<cai-dan :item='item' />
			</block>
			<template v-if="isLogin">
				<view class="caidan_item f_a_jb">
					<view class="f_a"><view class="icon iconfont icon-icon_im_keyboard" style="color: #45B3FF;"></view>审核糗事</view>
					<view class="icon iconfont icon-jinru" style="color: #ccc;"></view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import caiDan from '../../components/my/caiDan.vue'
	import login from '../../components/my/login.vue'
	import other from '../../components/common/otherLogin.vue'
	export default {
		components:{caiDan,login,other},
		data() {
			return {
				isLogin:false,
				caiDan: [
					{icon:'icon-liulan',tit:'浏览历史',color:'#45B3FF'},
					{icon:'icon-huiyuanvip',tit:'糗事认证',color:'#FF7434'}
				],
				dataList: [
					{tit:'糗事', count:0},
					{tit:'动态', count:0},
					{tit:'评论', count:0},
					{tit:'收藏', count:0}
				],
				login: {
					img:'../../static/img/12.jpg',
					name: '子川',
					people: 0,
					day: 0
				},
				other: [
					{icon:'icon-weixin',color:'#2BD19B'},
					{icon:'icon-QQ',color:'#2CAEFC'},
					{icon:'icon-xinlangweibo',color:'#FC7729'}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(!e.index) {
				uni.navigateTo({
					url: '../mySet/mySet',
				});
			}
		},
		methods: {
			// 跳转到登陆页面
			goLogin() {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>
.myWrap {
	padding: 0 30upx;
}
.top {
	text-align: center;
	font-size: 35upx;
	font-weight: bold;
	margin-bottom: 40upx;
}
.bottom {
	font-size: 35upx;
	justify-content: center;
	margin-bottom: 40upx;
}
.dataList {
	color: #989898;
}
.dataList view {
	text-align: center;
	font-size: 30upx;
	color: #000;
	line-height: 30upx;
}
.adv image {
	width: 100%;
	border-radius: 10upx;
	margin: 30upx 0;
}
</style>
