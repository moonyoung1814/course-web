// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import "../css/iconfont.css"

Vue.config.productionTip = false

Vue.use(VueRouter)


// Export factory function
export default function createApp () {
  // 1. Create a router instance
  const router = new VueRouter({
    mode: 'history',
    routes: [
      // {
      //   path: '/',
      //   component: () => import('./components/HelloWorld.vue'),
      //   meta: {
      //     ssr: true
      //   }
      // },
      // {
      //   path: '/csr',
      //   component: () => import('./components/csr.vue'),
      //   meta: {
      //     ssr: false
      //   }
      // }
      {
        path: '/',
        component: () => import('./views/home.vue'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/class',
        component: () => import('./views/class.vue'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/classList',
        component: () => import('./views/classList.vue'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/course',
        component: () => import('./views/course.vue'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/person',
        component: () => import('./views/person.vue'),
        meta: {
          ssr: true
        }
      },
      {
        path: '/project',
        component: () => import('./views/project.vue'),
        meta: {
          ssr: true
        }
      }
    ]
  })

  // 2. Create a root component
  const app = {
    router,
    // This is necessary, it is for vue-meta
    head: {},
    render: h => h(App)
  }

  // 3. return the root component
  return app
}