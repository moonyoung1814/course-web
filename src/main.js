// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import "../css/tailwind.css";
import api from "./utils";
import store from "./store/index";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.config.productionTip = false;

// 将api挂载到vue的原型上
Vue.prototype.$api = api;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);

export default function createApp() {
  // 1. Create a router instance
  const router = new VueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("./views/home.vue"),
        meta: {
          ssr: true,
        },
      },
      {
        path: "/class/:id",
        name: "class",
        component: () => import("./views/class.vue"),
        meta: {
          ssr: true,
        },
      },
      {
        path: "/classList",
        name: "classList",
        component: () => import("./views/classList.vue"),
        meta: {
          ssr: true,
        },
      },
      {
        path: "/course",
        name: "course",
        component: () => import("./views/course.vue"),
        meta: {
          ssr: true,
        },
      },
      {
        path: "/person",
        name: "person",
        component: () => import("./views/person.vue"),
        meta: {
          ssr: true,
        },
      },
      {
        path: "/project/:id",
        name: "project",
        component: () => import("./views/project.vue"),
        meta: {
          ssr: true,
        },
      },
    ],
  });

  // 2. Create a root component
  const app = {
    router,
    store,
    // This is necessary, it is for vue-meta
    head: {},
    render: (h) => h(App),
  };

  // 3. return the root component
  return app;
}
