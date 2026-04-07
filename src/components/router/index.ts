import { createRouter, createWebHistory } from 'vue-router'
import About from '../About.vue'
import HomeView from '../HomeView.vue'
import Book from '../Book.vue';
import Contact from '../Contact.vue';
import admin from '../admin.vue';
import register from '../register.vue';

const routes=[
    { path: '/',
      component: HomeView
    },
    {
        path: '/About',
        component: About
    },
    {
      path: '/book',
      component: Book
    },
   {
      path: '/contact',
      component: Contact
    },
    {
      path: '/admin',
      component: admin
    },
    {
      path: '/admin/register',
      component: register
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;