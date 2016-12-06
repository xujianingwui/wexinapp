var app=getApp();
Page({
  data:{
    num:app.num,
    flag:true,
    myarr:[{name:'张三',age:20},{name:'李四',age:19},
    {name:'王五',age:18},{name:'赵六',age:17}
    ]
  },
  onLoad:function(){
    console.log("监听页面加载")
  },
  onReady:function(){
    console.log("页面初次渲染完成")
  },
  onShow:function(){
    console.log("监听页面显示");
  },
  onHide:function(){
    console.log("监听页面隐藏");
    
  },
  onUnload:function(){
    console.log("监听页面卸载")
  },
  onPullDownRefresh:function(){
    console.log("页面下拉刷新");
    wx.stopPullDownRefresh();
  },
  onReachBottom:function(){
    console.log("页面上拉")
  },
  changNum:function(){
    this.setData({num:2000})
  },
  changeColor:function(){
    var f=this.data.flag;
    f=!f;
    console.log(f);
  },
  toggle:function(){
    wx.navigateTo({
      url: '../fujin/fujin'
    })
  },
})

