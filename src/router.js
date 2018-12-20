import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/index.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/categroy",
      name: "categroy",
      component: () => import("@/views/categroy/index.vue"),
      meta: {}
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/cart/index.vue"),
      meta: {}
    },
    {
      path: "/my",
      name: "my",
      component: () => import("@/views/my/index.vue"),
      meta: {}
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
