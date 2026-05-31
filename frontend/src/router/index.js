import {
  createRouter,
  createWebHistory
} from "vue-router"

import HomeView
from "../views/HomeView.vue"

import ProductDetailView
from "../views/ProductDetailView.vue"

// Lazy Loading

const CartView = () =>
  import("../views/CartView.vue")

const AboutView = () =>
  import("../views/AboutView.vue")

const routes = [

  {
    path: "/",
    component: HomeView
  },

    {
  path: "/product/new",
  component: () =>
    import("../views/ProductFormView.vue")
  },

  {
    path: "/product/:id",
    component: ProductDetailView
  },

  {
    path: "/cart",
    component: CartView
  },

  {
    path: "/about",
    component: AboutView
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import("../views/NotFoundView.vue")
  }

]

export default createRouter({

  history: createWebHistory(),

  routes

})