import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/people.vue';
import Login from '../views/login.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
