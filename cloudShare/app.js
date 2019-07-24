App({
  //全局只触发一次onLaunch
  onLaunch: function () {
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    //登录
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("session_key 未过期");
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          success: res => {
            console.log("code:" + res.code);
            let sessionId ="123";
            // 发送sessionId  res.code 到后台换取 openId, sessionKey, unionId，并存在服务端
             wx.request({
               url: 'http://192.168.1.16:9001/docs/login',
               data: {
                "code": res.code,
                "cookie":sessionId
               }
             })
            //把sessionId存储在本地
            wx.setStorageSync({
              key: 'cookie',
              data: sessionId,
            })
          }
        })
      }
    })


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