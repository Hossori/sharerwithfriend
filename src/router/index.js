import { createRouter, createWebHistory } from 'vue-router'
import VideoView from '../views/VideoView.vue'
import TravelView from '../views/TravelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/video',
      name: 'video',
      component: VideoView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,
    },
  ],
})

export default router