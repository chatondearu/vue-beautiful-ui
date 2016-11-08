import './assets/themes.scss';

import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import App from './example/App';
import Hello from './components/Hello';

let router = null;

// Vue configuration
Vue.config.debug = true;

// install plugins
Vue.use(Router);
Vue.use(Vuex);

//
// Setup Routing
//
router = new Router({
  linkActiveClass: 'active',
});

router.map({
  '/home': {
    name: 'home',
    component: Hello,
  },
});

router.redirect({
  '*': '/home',
});

router.start(App, '#app');
/* eslint-disable no-new */
