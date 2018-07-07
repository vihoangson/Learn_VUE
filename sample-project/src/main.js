import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'
import About from './About.vue'

Vue.component('home',Home);
Vue.component('about',About);
Vue.component('contact',Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
