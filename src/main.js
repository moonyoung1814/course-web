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
        component: () => import('./views/index.vue'),
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