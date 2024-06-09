import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
 
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Blog from '../pages/Blog.vue'
import Contact from '../pages/Contact.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Thankyou from '../pages/Thankyou.vue'

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
      path:'/services',
      name:'services',
      component: Services
    },
    {
      path:'/blog',
      name:'blog',
      component: Blog
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    },
    {
      path:'/checkout',
      name:'checkout',
      component: Checkout
    },
    {
      path:'/thankyou',
      name:'thankyou',
      component: Thankyou
    }
  ]
})

export default router
