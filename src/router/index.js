import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Information from '@/components/comother/info'
import Dues from '@/components/comother/dues'
import Header from '../components/layout/header.vue'
import footer from '../components/layout/footer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/header',
      name: 'header',
      component:Header

    },
    {
      path: '/footer',
      name: 'footer',
      component:footer

    },
    {
      path: '/information',
      name: 'Information',
      component:Information

    },
    {
      path: '/dues',
      name: 'Dues',
      component: Dues
    }
  ]
})

