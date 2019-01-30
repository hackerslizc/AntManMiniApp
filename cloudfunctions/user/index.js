// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”
/**
 * 
 * event 参数包含
 * - 小程序端调用传入的 data
 * - 经过微信鉴权直接可信的用户唯一标识 openid 
 * 
 */
const cloud = require('wx-server-sdk')
cloud.init();
exports.main = async(event, context) => {
  // const db = wx.cloud.database();
  let userList = [];
  // db.collection('user').get({
  //   success(res) {
  //     userList = res.data;
  //     console.log(res);
  //   }
  // })
  // wx.cloud.callFunction({
  //   name: 'user', 
  //   success(res) {
  //     console.log(res)
  //     userList = res.data;
  //   }
  // })

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看
  return {
    userList,
  }
}


// const cloud = require('wx-server-sdk')
// exports.main = async (event, context) => {
//   const res = await wx.cloud.callFunction({
//     // 要调用的云函数名称
//     name: 'user',
//     // 传递给云函数的参数
//     data: {}
//   })
//   return res
// }