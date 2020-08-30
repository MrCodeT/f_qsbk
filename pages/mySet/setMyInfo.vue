<template>
	<view class="miWrap">
		<view class="info_item f_a_jb">
			<view class="left">头像</view>
			<view class="right f_a" @tap='setImg'>
				<image :src="myImg" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">昵称</view>
			<view class="right f_a">
				<input type="text" v-model="name" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">性别</view>
			<view class="right f_a" @tap="check('sex')">
				{{sex}}
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">生日</view>
			<view class="right">
				 <picker class=" f_a" mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
						{{birthday}}
						<view class="icon iconfont icon-bianji1"></view>
				</picker>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">情感</view>
			<view class="right f_a" @tap="check('emotion')">
				{{emotion}}
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">职业</view>
			<view class="right f_a">
				<input type="text"v-model="job" value="" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="info_item f_a_jb">
			<view class="left">家乡</view>
			<view class="right f_a" @tap="showMulLinkageThreePicker">
				{{pickerText}}
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<!-- 按钮 -->
		<button type="default"@tap="submit">完成</button>
		
		<!-- 城市三级选择器 -->
		<mpvue-city-picker ref="mpvueCityPicker" themeColor="#007AFF" :pickerValueDefault="cityPickerValueDefault" 
		@onCancel="oncancel" @onConfirm="onConfirm" />
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	const sex = ['秘密','男','女']
	const emotion = ['秘密','未婚','已婚']
	export default {
		components: {mpvueCityPicker},
		data() {
			return {
				myImg: '../../static/img/12.jpg',
				name: '子川',
				sex: '男',
				birthday: '1997-12-13',
				emotion: '未婚',
				job: 'CV前端工程师',
				cityPickerValueDefault: [0,0,1],
				pickerText: '江苏省-徐州市-睢宁县'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		// 监听点击页面左上角返回按钮
		onBackPress() {
			//关闭三级菜单
			if(this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true
			}
		},
		//监听页面卸载
		onUnload() {
			//关闭三级菜单
			if(this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true
			}
		},
		methods: {
			// 切换头像
			setImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success:(res) => {
						this.myImg = res.tempFilePaths[0]
					}
				});
			},
			// 选择性别、情感
			check(val) {
				let arr = []
				switch (val){
					case 'sex':
					arr = sex
						break;
					case 'emotion':
					arr = emotion
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val){
							case 'sex':
							this.sex = sex[res.tapIndex]
								break;
							case 'emotion':
							this.emotion = emotion[res.tapIndex]
								break;
						}
					}
				});
			},
			// 日期范围
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 选择日期
			bindDateChange(e) {
				this.birthday = e.target.value
			},
			// 选择城市---三级菜单
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			// 监听三级菜单点击取消
			oncancel() {
				
			},
			// 监听三级菜单点击确认
			onConfirm(e) {
				this.pickerText = e.label
			},
			// 提交
			submit() {}
		}
	}
</script>

<style>
	.miWrap {
		padding: 0 30upx;
	}
	.info_item:first-child {
		border-top: 1px solid #F7F7F7;
	}
	.info_item {
		padding: 20upx;
		border-bottom: 1px solid #F7F7F7;
	}
	.info_item .left {
		color: #9B9B9B;
		font-weight: bold;
		font-size: 35upx;
	}
	.info_item .right image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.info_item .right {
		font-size: 30upx;
	}
	.info_item .right view {
		margin-left: 30upx;
		font-size: 40upx;
		color: #9B9B9B;
	}
	input {
		text-align: right;
		font-size: 30upx;
	}
	button {
		margin: 30upx;
		background-color: #FFD620 !important;
	}
</style>
