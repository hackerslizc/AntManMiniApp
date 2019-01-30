// miniprogram/pages/user/index/index.js
Page({
  data: {
    userList: []
  },
  onLoad: function (options) {
    const _this = this;
    const db = wx.cloud.database();
    db.collection('user').get({
      success(res){
        console.log(res.data)
        _this.setData({
          userList: res.data
        })
      }
    })
    // wx.cloud.callFunction({
    //   name: 'user', 
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },
})