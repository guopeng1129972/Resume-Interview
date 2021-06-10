# JavaScript 中捕获/阻止捕获、冒泡/阻止冒泡？

冒泡的终点最终可以冒泡到 window 上，即使是有 iframe 的话，也是不影响的

- stopPropagation()方法既可以阻止事件冒泡，也可以阻止事件捕获，也可以阻止处于目标阶段。
- stopImmediatePropagation()方法来阻止事件捕获，另外此方法还可以阻止事件冒泡。
- 那么 stopImmediatePropagation() 和 stopPropagation()的区别在哪儿呢？
  后者只会阻止冒泡或者是捕获。 但是前者除此之外还会阻止该元素的其他事件发生，
  但是后者就不会阻止其他事件的发生。
- DOM2 级事件规定的时间流包括 三个阶段：事件捕获阶段 处于目标阶段 事件冒泡阶段
- 注意：在 DOM 事件流中，实际的目标在捕获阶段不会接收到事件，下一个阶段是处于目标阶段，这时事件被触发，最后进入事件冒泡阶段。我们认为处于目标阶段是事件冒泡阶段的一部分。

# 如何实现一个深拷贝

- 利用 JSON 类 JSON.parse(JSON.stringify(a)); 缺点是不能转化引用对象（转化为引用地址指针）
- 遍历数组的方法从新回调

# 原型和原型链？

# js 中三种作用域详解（全局，函数，块级）

全局作用域 函数作用域 块级作用域
箭头函数会默认和外层的 this 绑定，箭头函数再嵌套箭头函数 this 依然指向外层，箭头函数没有自己的 this

# 怎么理解闭包？

首先你要一直反复使用这个变量，其次函数在执行完后会自动销毁。
此时，函数中声明的变量也随之销毁，所以不能持续使用，所以才会有闭包机制，通过闭包来实现可持续执行操作。
使用完变量后对闭包进行释放，否则会造成内存损耗
使用完记得标记清除 置为 null

# Math.max() Math.min() 的使用

Math.min() 返回零个或更多个数值的最小值，Math.max()返回零个或更多个数值的最大值。
不传参数的时候，min/max返回无限大/小
Math.min();//Infinity
Math.max();//-Infinity
var arr = [1, 2, 3];
var max = Math.max(...arr);//3
var min = Math.min(...arr);//1

# apply、call 和 bind 的区别？

xw.say.call(xh);
xw.say.apply(xh);
xw.say.bind(xh)();
xw.say.call(xh,"实验小学","六年级");  
xw.say.apply(xh,["实验小学","六年级"]);
xw.say.bind(xh,"实验小学","六年级")();

# Object.is()、==、===的区别

- Object.is()与===用法类似，用于判断两个值的是否相等，区别在两种情况
- +0 === -0 //true
- NaN === NaN // false
- Object.is(+0, -0) // false
- Object.is(NaN, NaN) // true
  > 这两种情况一般用 Object.is()作为返回值比较符合我们的预期，但也不能说 Object.is()是作为
  > ===的优化处理，只是场景不一样

# String.prototype.match()

str.match(regex) 方法检索返回一个字符串匹配正则表达式的结果。

```js
const paragraph = "The quick brown fox jumps over the lazy dog. t barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex); // expected output: Array ["T", "I"]
```
