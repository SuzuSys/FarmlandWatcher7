import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/route';
import store from '@/store/user';
import Auth from '@aws-amplify/auth';

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
  if (nextAuthState === AuthState.SignedIn && authData) {
    router.push({ path: '/dashboard' });
  }
  if (nextAuthState === AuthState.SignedOut) {
    router.push({ path: '/signin' });
  }
});

function getAuthenticatedUser() {
  return Auth.currentAuthenticatedUser()
    .then((data) => {
      if (data && data.signInUserSession) {
        store.commit("setUser", data);
        return data;
      }
    })
    .catch((e) => {
      console.error(e);
      store.commit("setUser", null);
      return null;
    });
}

let user;
router.beforeResolve(async (to, from, next) => {
  console.log('beforeResolve');
  user = await getAuthenticatedUser();
  if (to.name === 'SignIn' && user) {
    return next({ path: '/dashboard' });
  }
  if (to.matched.some(record => record.meta.requireAuth) && !user) {
    return next({ path: "/signin" });
  }
  return next();
});

export default router;