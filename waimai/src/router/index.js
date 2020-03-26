import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite/MSite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite',
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/info',
        component: ShopInfo
      }
    ]
  },
  {
    path: '/msite',
    name: 'MSite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,

  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
