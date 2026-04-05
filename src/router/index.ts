import CustomerApplications from '@/views/CustomerApplications.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: CustomerApplications
    }
   
  ]
})


export default router
