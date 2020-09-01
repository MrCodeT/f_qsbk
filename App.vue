<script>
	import lib from './common/lib.js'
	export default {
		onLaunch: function() {
			lib.NetWork.on()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入uniapp官方的样式库 */
	@import './common/uni.css';
	/* 引入css3动画库 */
	@import './common/animate.css';
	/* 引入自定义的字体图标 */
	@import './common/icon.css';
	/* 引入自定义css样式库 */
	@import './common/display.css';
</style>
