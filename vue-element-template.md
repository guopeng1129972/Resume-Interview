<!-- 记录比较重要的操作的点 vue-element-template & vue-element-admin-->
# axios 创建请求拦截

就是通过`service.interceptors.request/response`的 use 方法去修改的

```js
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers["X-Token"] = getToken();
  }
  return config;
});
service.interceptors.response.use((response) => {
  const res = response.data;
  // if the custom code is not 20000, it is judged as an error.
  if (res.code !== 20000) {
    Message({
      message: res.message || "Error",
      type: "error",
      duration: 5 * 1000,
    });
  }
  return Promise.reject(new Error(res.message || "Error"));
});
```

# 点击小眼睛聚焦到输入框

```js
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      // 切换显示，然后将鼠标聚焦到当前点击输入的文本框里
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
```
# 退出登录置空路由数组
```js
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
```