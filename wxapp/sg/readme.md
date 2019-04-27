- 全局配置
 window + tabbar
 assets目录  pages

- UI 框架 
 app.wxss 引入weui  @import 'styles/weui.wxss';
 列表要的是 数据
 生命周期 wx.request

- list 有套路
 onLoad onReachBottom onPullDownRefresh
 isLoading 加载 状态
 currentPage 传参
 totalPages 最后一页

- template 模板
 共用的界面
 <template data={{}}>
 <template name="loading"/>