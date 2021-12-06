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
  console.log('detect onAuthUIStateChange');
  if (nextAuthState === AuthState.SignedIn) {
    console.log('detect upper');
    console.log(authData);
    store.commit('setUser', authData);
    console.log('store data');
    console.log(store.state.user);
    router.push({ path: '/dashboard' });
  }
  if (!authData) {
    // user is not signed in...
    console.log('detect downer');
    router.push({ path: '/signin' });
    store.commit('setUser', null);
  }
});

let user;
router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    console.log('beforeResolve');
    console.log(store.state.user);
    user = store.state.user;
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