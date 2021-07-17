import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

Vue.filter("snippet", (val) => {
  return val.length < 80 ? val : `${val.slice(0, 80)}...`;
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/:id",
    name: "Blog",

    component: () => import("../components/Blog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
