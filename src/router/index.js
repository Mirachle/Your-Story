import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '@/components/Registration.vue';
import StartPage from '@/components/StartPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
