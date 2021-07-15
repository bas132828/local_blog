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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Blog/:id",
    name: "Blog",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Blog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
