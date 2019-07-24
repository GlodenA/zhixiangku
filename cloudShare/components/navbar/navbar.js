const app = getApp()
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    bgColor: {
      type: String,
      value: 'rgba(0,0,0,0)'
    },
    title: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  ready() {
    let {
      statusBarHeight,
      navBarHeight,
      userInfo
    } = app.globalData;

    this.setData({
      statusBarHeight,
      navBarHeight,

    })
  },
  methods: {
    selfcentre() {
      wx.navigateTo({
        url: '/pages/selfcentre/selfcentre',
      })
    },
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
