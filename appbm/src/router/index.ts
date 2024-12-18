import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import DynamicPage from '../views/DynamicPage.vue';
import TeamsPage from '../views/TeamsPage.vue';
import MatchesPage from '../views/MatchesPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  { path: '/page/:id', component: DynamicPage },
  { path: '/teams', component: TeamsPage },
  { path: '/matches', component: MatchesPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
