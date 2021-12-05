import Vue from 'vue';
import App from './App.vue';
import store from './store/user';
import router from './router/index';
import vuetify from './plugins/vuetify';

import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import Amplify, * as AmplifyModules from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Vue.use(AmplifyModules);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');