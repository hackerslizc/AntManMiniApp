// components/record/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: { // 控制组件显示隐藏
      type: Array,
      observer: function (newVal, oldVal) {
        console.log(`newVal: ${newVal}, oldVal: ${oldVal}`)
        if (newVal != null && newVal != undefined) {
          this.setData({
            recordlist: newVal
          });
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    recordlist: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
