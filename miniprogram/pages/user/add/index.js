const RecordAdd = {
  data: {
    UserType: '',
    UserTypeArr: ['供应商', '材料商'],
    userTypeIndex: [0]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新增客户',
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  bindPickerChangeFn(e) {
    console.log(e.detail.value)
  },
};
Page(RecordAdd);