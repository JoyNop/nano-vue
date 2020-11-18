import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //   roles: ["admin"],
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/notfound",
    // name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Error",
    },
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
  {
    path: "/:pathMatch(.*)*",
    name: "*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const role = "user";
// 在进入一个页面前会触发 router.beforeEach 事件
router.beforeEach((to, from, next) => {
  console.log(to, from);

  if (to.meta.roles) {
    if (to.meta.roles.includes(role)) {
      alert("succeess");

      next();
    } else {
      alert("redircct");
      router.push({ path: "/notfound" });
    }
  } else {
    next();
  }
});

export default router;
