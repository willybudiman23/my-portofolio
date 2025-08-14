import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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
  history: createWebHistory('/my-portofolio/'),
  routes,
})

export default router