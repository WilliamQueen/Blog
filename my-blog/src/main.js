// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Using vant component library
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant---components
import {  NavBar,
          Field,   
          RadioGroup, 
          Radio,
          Picker 
        } from 'vant';
Vue.use(NavBar, Field, RadioGroup, Radio, Picker );

Vue.config.productionTip = false

import './assets/reset.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
