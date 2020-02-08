import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/people.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
