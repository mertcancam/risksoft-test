// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './polyfill'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'

// todo
// cssVars()

Vue.use(BootstrapVue)
sync(store, router);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,

  components: {
    App
  }
})
