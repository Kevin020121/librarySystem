// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store/index.js'

Vue.config.productionTip = false

import 'animate.css'

//自定义指令  让input自动聚焦
Vue.directive('focus',{
  inserted(el,binding) {
    if(binding.value) {
      el.focus();
    }
  }
})

//修改标题
router.beforeEach((to,from, next) => {
  document.title = to.meta.title;
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
