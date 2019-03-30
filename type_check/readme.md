类型 typeof 
复杂数据类型 object 
Array 是可遍历的对象
Function 是可运行的对象
JSON Object对象字面量是可枚举的对象 for(key in)
typeof 半吊子， typeof[] 没办法和json 区分开
有一个办法可以区分Array   JSON Object

33 concept
(function () {console.log('立即执行')}) ()   //立即执行

Object.prototype.toString()   //"[object Object]"

Object.prototype.toString.call([])
"[object Array]"
Object.prototype.toString.call(123)
"[object Number]"
Object.prototype.toString.call('er')
"[object String]"

1. 用对象字面量来做面向对象 区别于原型式的
它没有被实例化的需要 Type. 将在程序中就做类型检测
var Type = {};  组织代码

2. for 来一次性的加完 同步异步的问题
使用闭包来讲type 作用域封闭起来，
立即执行函数，同步执行，类型检测函数的定义，因为函数嵌套函数，形成了闭包，当函数再被调用时（异步），找到定义时刻的type

3. Object.prototype.toString.call(obj)
Object? 祖先，顶级对象   
函数才有prototype属性，原型上有这样的toString方法，解决typeof（不稳定不准确）的尴尬问题 "[object Object]"
[object Array] 方法的执行方式可以被改变   Object.prototype.toString.call(obj)