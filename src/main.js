import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueRessource from 'vue-resource'
import About from './components/About'
import Pics from './components/Pics'
import Home from './components/Home'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueRessource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/about', component: About},
    {path: '/home', component: Home},
    {path: '/pics', component: Pics},
    {path: '/*', component: Home}
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
