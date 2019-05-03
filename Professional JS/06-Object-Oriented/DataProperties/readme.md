Js中的数据属性和访问器属性
数据属性：
- configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为true
- enumerable: 表示能否通过for-in循环返回属性
- writable：表示能否修改属性的值
- value：包含该属性的数据值。默认为undefined

修改属性属性的默认特性要用到一个方法：Object.defineProperty()方法
这个方法有三个参数：
- 属性所在的对象
- 属性名
- 一个描述符对象