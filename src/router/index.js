import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Thankyou from '../pages/Thankyou.vue'
import NotFound from '../pages/404.vue'
import store from '../store/index.js'
import EmptyCart from '../pages/EmptyCart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      beforeEnter: (to, from, next) => {
        if (store.state.cart.length > 0) {
          next()
        } else {
          next('/emptycart')
        }
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        if (store.state.cart.length > 0) {
          next()
        } else {
          next('/404')
        }
      }
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: Thankyou
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/emptycart',
      name: 'emptycart',
      component: EmptyCart
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router
