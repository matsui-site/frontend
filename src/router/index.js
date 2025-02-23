import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Service from '../components/Service.vue';
import Contact from '../components/Contact.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'App',
      component: App,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Service',
      name: 'service',
      component: Service,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
