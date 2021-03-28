import Vue from 'vue'
import VueRouter, { NavigationGuard, RouteConfig } from 'vue-router'
import Registration from '@/components/Registration.vue';
import LoginPage from '@/components/LoginPage.vue';
import HomePage from '@/components/HomePage.vue';
import { AccountService } from '../services/Account/AccountService';
import { getApplicationStateHolder } from '../app-init';
import { FakeAuthentication } from '../services/Authentication/FakeAuthentication';


Vue.use(VueRouter);

const applicationStateHolder = getApplicationStateHolder();
const authenticationService = new FakeAuthentication(localStorage);
const accountService = new AccountService(authenticationService, applicationStateHolder);

const createRouteGuardBasedOnLogin = (isUserShouldBeLoggedIn: boolean, redirectPath: string): NavigationGuard => {
  return (_to, _from, next) => {
    const isUserLoggedIn = accountService.isLoggedIn();
    if (isUserLoggedIn === isUserShouldBeLoggedIn)
      next();
    else
      next(redirectPath);
  };
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: createRouteGuardBasedOnLogin(false, '/home'),
    props: { authentication: accountService, redirectToHome: () => { router.push('/home') } }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    beforeEnter: createRouteGuardBasedOnLogin(false, '/home'),
    props: { authentication: accountService, redirectToLogin: () => { router.push('/')} }
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: createRouteGuardBasedOnLogin(true, '/'),
    props: { applicationStateHolder: applicationStateHolder, authentication: accountService, redirectToLogin: () => { router.push('/')} }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
