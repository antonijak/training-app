import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Stats from "../views/Stats";
import Workout from "../views/Workout";
import NewW from "../views/NewW";
import Info from "../views/Info";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/new",
    name: "New workout",
    component: NewW,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/workout/:type",
    name: "Workout",
    component: Workout,
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
];

const router = new VueRouter({
  routes,
});

export default router;
