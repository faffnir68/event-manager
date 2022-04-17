import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import EventList from "../views/events/EventList.vue";
import EventDetails from "../views/events/EventDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    name: "EventList",
    component: EventList,
    props: (route:any) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: `/events/:id/details`,
    name: "EventDetails",
    props: true,
    component: EventDetails
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
