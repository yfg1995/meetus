import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/pages/Portfolio.vue')
    },
    {
      path: '/elements',
      name: 'elements',
      component: () => import('../views/pages/Elements.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
