//app.js
App({
  onLaunch:function(){
    console.log("小程序初始化");
  },
  onShow:function(){
    console.log("小程序显示")
  },
  onHide:function(){
    console.log("小程序隐藏")
  },
  num:1000,
  getData:function(){
    return newDate().getFllYear()
  }
})