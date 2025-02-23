import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import HelloWorld from '../components/HelloWorld.vue'


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
      name: 'helloWorld',
      component: HelloWorld,
    },
  ],
})

export default router
