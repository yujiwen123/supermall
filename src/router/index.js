import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home.vue"),
  },
  {
    path: '/category',
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/category/Category.vue"),
  },
  {
    path: '/cart',
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/cart/Cart.vue"),
  },
  {
    path: '/profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile/Profile.vue"),
  },
  {
    path: '/detail/:iid',
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/detail/Detail.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
