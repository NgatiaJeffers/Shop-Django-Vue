import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
