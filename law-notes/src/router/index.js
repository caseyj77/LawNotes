import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import CaseBriefsView from '@/views/CaseBriefsView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/briefs', name: 'briefs', component: CaseBriefsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
