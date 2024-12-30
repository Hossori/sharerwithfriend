import { createRouter, createWebHistory } from 'vue-router'
import TravelView from '../views/TravelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,
      meta: { title: 'いこうや' }
    },
  ],
})

export default router