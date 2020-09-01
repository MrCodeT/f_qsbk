const NetWork = {
	isConnect: false,
	on() {
		// 获取当前网络
		uni.getNetworkType({
		    success: res => {
					if(res.networkType != "none") {
						this.isConnect = true 
						return
					}
		        uni.showToast({
		        	title: '请先连接网路',
							icon:"none"
		        });
		    }
		});
		// 监听网络状态变化
		uni.onNetworkStatusChange(res => {
		    this.isConnect = res.isConnected
				if(!res.isConnected) {
					uni.showToast({
						title: '您目前处于断网状态',
						icon: "none"
					});
				}
		});
	}
}

export default {
	NetWork
}