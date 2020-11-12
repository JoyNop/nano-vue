import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
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
    path: "/todoList",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "todo" */ "@/views/TodoList.vue"),
  },
  {
    path: "/luckdraw",
    name: "LuckDraw",
    component: () =>
      import(/* webpackChunkName: "luckdraw" */ "@/views/LuckDraw.vue"),
  },
  {
    path: "/address/list",
    name: "Address",
    component: () =>
      import(/* webpackChunkName: "address" */ "@/views/address/AddressList"),
  },
  {
    path: "/address/edit",
    name: "AddressEdit",
    component: () =>
      import(/* webpackChunkName: "address" */ "@/views/address/AddressEdit"),
  },
  {
    path: "/chat/list",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chatpage" */ "@/views/chat"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: import(/* webpackChunkName: "demo" */ "@/views/Demo.vue"),
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: import(/* webpackChunkName: "Vuex" */ "@/views/Vuex.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
