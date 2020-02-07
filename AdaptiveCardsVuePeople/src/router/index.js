import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/people.vue';
import Create from '../views/createPerson.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
