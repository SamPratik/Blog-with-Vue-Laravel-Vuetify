
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'
Vue.use(Vuetify)
Vue.use(VueRouter)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
var Home = require('./components/Home.vue');
var AppToolbar = require('./components/AppToolbar.vue');
var ContactUs = require('./components/ContactUs.vue');
var AppFooter = require('./components/AppFooter.vue');
var SignUp = require('./components/SignUp.vue');

const routes = [
  { path: '/home', component: Home },
  { path: '/contact-us', component: ContactUs },
  { path: '/signup', component: SignUp }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components: {
      Home,
      AppToolbar,
      AppFooter,
      SignUp
    }
});
