// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import VueRouter from 'vue-router'
import Vant from 'vant';
import router from './router'
import 'vant/lib/index.css';
// import './assets/reset.css'

Vue.prototype.$http = axios
// Vue.use(VueRouter )
// Using vant component library
Vue.use(Vant);
// vant---components
import {  NavBar,
          Field,   
          RadioGroup, 
          Radio,//单选框
          Picker ,
          Toast ,//提示框
          Loading,
          Search //搜索框 
        } from 'vant';
Vue.use(NavBar, Field, RadioGroup, Radio, Picker, Toast, Loading, Search );

Vue.config.productionTip = false



//自定义指令全局写法
// 方法一
// Vue.directive('color',{
//   bind(el,banding,vnode){
//     el.style.color = '#'+Math.random().toString(16).slice(2,8)
//   }
// })
Vue.directive('set',{
  bind(el,binding,vnode){
    if(binding.value = 'width'){
      el.style.maxWidth = '580px'
    }
  }
})

// Vue.directive('bold',{
//   bind(el,binding,vnode){
//     el.style.fontSize="70px"
//     if(binding.value = 'thin'){
//       el.style.fontWeight="900"
//     }
//     if(binding.arg = "clo"){
//       el.style.color = 'red'
//     }
//   }
// })
// 方法二
  // Vue.directive('color',function(el,banding,vnode){
  //   el.style.color = 'red'
  // })

// 自定义过滤器
// Vue.filter('length',function(value){
//   return value.slice(0,100) + '...'
// })


// 创建路由
// const router = new VueRouter({
//   route
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
