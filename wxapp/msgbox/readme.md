- 组件思维
  弹窗组合了一些标签， 形成了独立的弹窗功能，
  在其他页面里也要用到， 组合成一个独立的组件
  <dialog />
  页面由组件拼装而成。 组件化思维

- 组件语法
  同于Page 又有异
  Component({
      data: {},
      properties: {
          title:{
              type:String,
              value: '标题'
          }
      },
      methods:{}
  })