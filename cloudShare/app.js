App({
  //全局只触发一次onLaunch
  onLaunch: function () {
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.navBarHeight = 44 + res.statusBarHeight
      }
    }) 
  },
  //页面找不到监听跳转到首页
  onPageNotFound:function(){
    wx.switchTab({
      url: 'pages/index/index',
    })
  },
  //添加自定义全局变量
  globalData: {
    userInfo: null,
    statusBarHeight: 0,
    navBarHeight: 0
  }
})