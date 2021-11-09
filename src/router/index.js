import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Stats = () => import("../views/Stats");
const Workout = () => import("../views/Workout");
const NewWorkout = () => import("../views/NewWorkout");
const Info = () => import("../views/Info");

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
    component: NewWorkout,
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
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
  // TODO check if user is authenticated etc.
});

export default router;
