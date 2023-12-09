import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import HowToMobile from './views/HowToMobile.vue';
import HowToDesctop from './views/HowToDesctop.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/howto_mobile', component: HowToMobile },
  { path: '/howto_desctop', component: HowToDesctop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
