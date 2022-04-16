import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Portfolio from '@/views/pages/Portfolio.vue';
import Elements from '@/views/pages/Elements.vue';
import NotFound from '@/views/NotFound.vue';
import Blog from '@/views/Blog.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Contact from '@/views/Contact.vue';

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
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    },
    ,
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:notFound(.*)',
      name: 'notFound',
      component: NotFound
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
