import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Portfolio from '@/views/pages/Portfolio.vue';
import Elements from '@/views/pages/Elements.vue';
import NotFound from '@/views/NotFound.vue';
import BlogDetails from '@/views/blog/BlogDetails.vue';
import Blog from '@/views/blog/Blog.vue';

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
      component: () => import('@/views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Services.vue')
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
      path: '/single-blog',
      name: 'blogDetails',
      component: BlogDetails
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
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
