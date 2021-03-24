import Vue from 'vue'
import VueRouter, { NavigationGuard, RouteConfig } from 'vue-router'
import Registration from '@/components/Registration.vue';
import LoginPage from '@/components/LoginPage.vue';
import HomePage from '@/components/HomePage.vue';
import { FakeAuthentication } from '@/services/Authentication/FakeAuthentication';

Vue.use(VueRouter);

const authenticationService = new FakeAuthentication(localStorage);

const createRouteGuardBasedOnLogin = (isUserShouldBeLoggedIn: boolean, redirectPath: string): NavigationGuard => {
  return (_to, _from, next) => {
    if (authenticationService.isLoggedIn() !== isUserShouldBeLoggedIn)
      next(redirectPath);
    next();
  };
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: createRouteGuardBasedOnLogin(false, '/home'),
    props: { authentication: authenticationService, redirectToHome: () => { router.push('/home') } }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    beforeEnter: createRouteGuardBasedOnLogin(false, '/home'),
    props: { authentication: authenticationService, redirectToLogin: () => { router.push('/')} }
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: createRouteGuardBasedOnLogin(true, '/'),
    props: { authentication: authenticationService }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
