# CSS3 @media 查询

如果文档宽度小于 300 像素则修改背景颜色(background-color):

```css
@media screen and (max-width: 300px) {
  body {
    background-color: lightblue;
  }
}
```

# 元素垂直水平居中？

```css
/* 1  flex */
.p {
  display: flex;
  justify-content: center; /* 水平 */
  align-items: center; /* 垂直 */
}
/* 2 transform*/
.p {
  position: relative;
}
.c {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 3 通过设置父容器相对定位，子级设置绝对定位，标签通过margin实现自适应居中； */
.p {
  position: relative;
}
.c {
  /* 四个方向设置为0, 然后通过margin为auto自适应居中 减去一半值同理*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

# 如何自适应各种屏幕适配？

- `<meta name="viewport" content="width=device-width,initial-scale=1" />`
- 百分比
- rem
- 媒体查询器@media 如果屏幕宽度小于 400 像素@media screen and (max-width: 400px)

# css 中如何定义一个变量

```css
/* sass中定义变量 */
$bg-color: #d9d9d9; /* 定义： */
.has-border-table > tr > td {
  border-right: 1px solid var($bg-color); /* 使用： */
}
/* 全局定义变量 */
:root {
  --borderColor: #ccc;
}
/* 2、定义某元素下的变量 */
.look {
  --borderColor: #ccc;
}
/* 使用： */
.has-border-table > tr > td {
  border-right: 1px solid var(--borderColor);
}
```

# 什么是 BFC IFC,如何触发？

- 触发 BFC：
  body 根元素
  浮动元素：float 除 none 以外的值
  绝对定位元素：position (absolute、fixed)
  display 为 inline-block、table-cells、flex
  overflow 除了 visible 以外的值 (hidden、auto、scroll)
  注意根元素就创建了个 BFC
- 那么 BFC 又有以下特点：
  内部块级盒子垂直方向排列
  盒子垂直距离由 margin 决定，同一个 BFC 盒子的外边距会重叠
  BFC 就是一个隔离的容器，内部子元素不会影响到外部元素
  BFC 的区域不会与 float box 叠加
  每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC 的用途：
  清除浮动
  解决外边距合并
  布局

# css3 中的变形（transform）、过渡(transtion)、动画(animation)

旋转 rotate、扭曲 skew、缩放 scale 和移动 translate 以及矩阵变形 matrix

- transform-origin（X,Y）改变基点 这个和 transform 是同级的设置
- transform:rotate(30deg)
  transform:rotate(30deg),2D 旋转，正值为顺时针旋转，负值为逆时针旋转，默认旋转基点是中心点，也可以通过 transform-origin（X,Y）改变基点。
- transform:skew(30deg,10deg),注意，这里的 X 轴和 Y 轴与我们平时认为的坐标系的 XY 轴正好相反
- transform：scale（2,1.5），表示在水平方向（X 轴）缩放 2 倍，在垂直方向（Y 轴）缩放 1.5 倍
- transform：translate（100px，20px），表示在水平方向上移动 100px；

# 修改 ElementUI 样式的几种方式

- 1.新建全局样式库
  > 新建 global.css 文件，并在 main.js 中引入。 global.css 文件一般都放在 src->assets 静态资源文件夹下的 style 文件夹下，在 main.js 的引用写法如下：
  > import "./assets/style/global.css";
  > 在 global.css 文件中写的样式，无论在哪一个 vue 单页面都会覆盖 ElementUI 默认的样式。
- 2.在当前 vue 单页面中添加一个新的`style`标签
  > 在当前的 vue 单页面的 style 标签后，添加一对新的 style 标签，新的 style 标签中不要添加 scoped 属性。在有写 scoped 的 style 标签中书写的样式不会覆盖 ElementUI 默认的样式。
- 3.使用/deep/关键字，或者使用`>>>`深度修改样式符

```html
<style scoped>
  .a >>> .b {
    /* ... */
  }
</style>
<!-- 编译后 -->
.a[data-v-f3f3eg9] .b { /* ... */ }
<!-- 使用别名 -->
<style scoped lang="less">
  @deep: ~">>>";
  .box {
    @{deep} .title {
      ...;
    }
  }
</style>
```

**~ 表示转义**
转义允许您将任意字符串用作属性或变量值。除插值外，里面的任何东西 ~"anything" 或 ~'anything' 原样使用。

```css
.weird-element {
  content: ~"^//* some horrible but needed css hack";
}
编译为以下内容： .weird-element {
  content: ^// some horrible but needed ss hack;
}
```

- 4.内联样式
  > 直接写
