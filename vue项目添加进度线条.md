## 添加加载动画效果

就是页面顶端的那一条进度线

```bash
npm install nprogress
```

- src/router/index.js

```js
router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});
router.afterEach(() => {
  Nprogress.done();
});
```
