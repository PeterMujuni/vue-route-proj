import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobsView from "@/views/jobs/JobsView.vue"
import JobDetailView from "@/views/jobs/JobDetailView.vue"
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobDetail',
    component: JobDetailView,
    props: true,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
