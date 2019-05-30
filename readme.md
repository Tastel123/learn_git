- DOM 之后MVVM兴起
MVVM 封装了DOM(VUE REACT)  让其更高效
- 组件开发  UI开发
  将一个复杂页面分为多个组件，拼装页面
  是一个类 
  一个组件只要实例化一下，就可以用了
  多实例化几次，就可以复用
- 组件是一个粽子，里面有很多东西
  template  render()
  css
  js  isLiked
- React 和 VUE 都是MVVM 的一种实现
  React用来做后台界面  VUE适合做用户界面
  挂载点 界面和组件的关系，界面 <- 组件 <- html
  DOM 被封装 组件类
  constructor this.state 数据部分
  模板 render()
  setData setState({})
- 模板里数据的细化
  es6字符串模板 每次编译
  setState  this.render()
  状态和模板结合的地方在模板的编译，插入数据
  setState 驱动模板重新编译一下  数据驱动