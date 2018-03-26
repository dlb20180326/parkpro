import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
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
      component:Header,

    },
    {
      path: '/footer',
      name: 'footer',
      component:footer,

    }
  ]
})

