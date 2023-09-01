import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailedCardView from '../views/DetailedCardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card/:data',
      name: 'cards',
      component: DetailedCardView,
      props: { data: true}
    }
  ]
})

export default router
