import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404
    redirect: { name: 'home' }, // Redirect to home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
