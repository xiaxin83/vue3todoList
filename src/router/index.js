import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/homepage.vue"),
    },
  ],
});

export default router;
