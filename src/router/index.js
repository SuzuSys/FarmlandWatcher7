import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/route';
import store from '@/store/user';

import AmplifyModules from 'aws-amplify';

import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

Vue.use(VueRouter);
Vue.use(AmplifyModules);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

onAuthUIStateChange((nextAuthState, authData) => {
  if (nextAuthState === AuthState.SignedIn) {
    store.commit('setUser', authData);
    router.push({ path: '/dashboard' });
  }
  if (!authData) {
    // user is not signed in...
    router.push({ path: '/signin' });
    store.commit('setUser', null);
  }
});

let user;
router.beforeResolve(async (to, from, next) => {
  console.log('beforeResolve');
  console.log(to.matched.some(record => {
    console.log(record);
    console.log(record.meta);
    return record.meta.requiresAuth;
  }));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('Auth page');
    user = store.state.user;
    console.log(user);
    if (!user) {
      return next({
        path: '/signin'
      });
    }
    return next();
  }
  return next();
});

export default router;