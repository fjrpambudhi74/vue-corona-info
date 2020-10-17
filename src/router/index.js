import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Info from '../components/Info.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        auth: true,
        title: 'Covid19 Realtime Tracking'
      }
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
      meta: {
        auth: true,
        title: 'Covid19 Information'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        auth: true,
        title: 'Covid19 About'
      }
    },
  ],

})
