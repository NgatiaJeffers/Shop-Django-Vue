import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Category from "../views/Category.vue";

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
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product'
    }
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category,
    meta: {
      title: 'Category'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
