vue2 + elementui
# Vue中的this指向
Vue的钩子函数方法都是指向Vue实例,moutend的方法中this指向window实例
# match exec test 都是正则校验的方法，但是都有所区别
# Err:Waring To load an ES module,set 'type'?
就是在组件的项目的package.json中需要配置 "type":"module"
# click.native="addhandler"和@click:='addhandler'的区别是什么？
# 从el-empty入手学习element源码
# el-popover样式无法通过样式修改去更改
在控制台的elements中可以发现el-popover与app同级，
内联样式 或者写在style的同级中 也是可以实现的
# el-popover使用v-for循环渲染的时候需要添加多个v-module来绑定，然后通过$set去增加响应式
```html
<div v-for='(index,item) in data' :key='index'>
  <el-popver v-module='selectGrid[index]'></el-popver>
</div>
<script>
  data(){
    selectGrid:[]
  }
</script>
```
# es6拼接数组
let arr=[...arr1,...arr2]
# 删除数组中的第i项
arr.splice(index,1)
# 排除错误的时候，应该注释掉不用的代码
# Vue中静态写的内容会覆盖动态绑定的内容
比如class='xxx' :class='yyy' 最终生效的是静态增加的
# ul{list-style-type:none;}
# 多个class类的绑定
:class='myclass'
:class='value===true?classA:classB'
:class='[{empty-data:!hasData},{'card-data:true}]'
# overflow:auto;设置滚动的时候，注意不要滚动头部
# 使用Array.some判断是否存在某个元素
# 常用的正则表达式
匹配中文[\u4e00-\u9fa5]，并不完整，不能匹配单部首等
https://github.com/cdoco/common-regex
# moutend的方法，只在init的时候执行一次
# 改代码的时候先想好，能想多远想多远，不要先改了试试可以不，没用
# 重绘与回流
回流会导致dom重新渲染，比较耗性能，而Vdom就是用一个对象去代替dom对象，
当有多次更新dom的动作后，不会立即更新DOM，而是将变化保存到一个对象中，最终一次性将改变渲染出来。
# updateChildren diff核心算法
# vue.parent只会返回一个，但是不固定
# vue.children就会返回一个数组对象 可以用ref去标记绑定，当然也可以使用emit与props去传递用到的参数
# watch的两种写法
```js
// 键值的写法
watch:{
  xxx:{
    handler(cur,old){
      if(cur){
        console.log(123)
      }
    }
  }
}
// 方法+返回值
watch:{
  xxx(cur,old){
    // doSomething()
  }
}
```
