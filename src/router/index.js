import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../components/Home.vue'


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
  ],
})

export default router
