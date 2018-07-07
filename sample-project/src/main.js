import Vue from 'vue'
import App from './App.vue'
import Thongbao from './Thongbao.vue'

Vue.component('thongbao',Thongbao);

new Vue({
  el: '#app',
  render: h => h(App)
})
