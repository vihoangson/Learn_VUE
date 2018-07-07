import Vue from 'vue'
import App from './App.vue'
import Thongbao from './Thongbao.vue'
import Whatwedo from './Whatwedo.vue'

Vue.component('thongbao',Thongbao);
Vue.component('componentWhatwedo',Whatwedo);


new Vue({
  el: '#app',
  render: h => h(App)
})
