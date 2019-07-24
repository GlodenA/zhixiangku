Page({
  data:{
    path:''
  },
  viewdoc:function(){
    var that = this
    wx.downloadFile({
        url:'http://192.168.1.16:9001/docs/filedownload/123.pdf',
       //仅为示例，并非真实的资源
        success:function(res) {
          console.log("已下载")
          that.setData({
            path:res.tempFilePath
          })
          that.openDocument()
        }
      })


    
    
    // wx.navigateTo({
    //   url: '/pages/doc/doc?id=123',
    // })
  },
    openDocument:function(){
      let path = this.data.path
      if(path=='')
      {
        wx.showModal({
          title: '提示',
          content: '请先下载文档',
          showCancel:false
        })
      }
      console.log(path)
    wx.openDocument({
      filePath: path,
      fail: function (err) {

        console.log(err)



      }
    })
    }


})