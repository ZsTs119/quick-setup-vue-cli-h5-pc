
Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 默认重定向js页面
  if (to.path == '/') {
    next()
  } else {
    next();
  }
});
// 防止连续点击多次路由报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router;
