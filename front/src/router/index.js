import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/xyz',
    name: 'Xyz',
    component: () => import(/* webpackChunkName: "xyz" */ '../views/Xyz.vue')
  },
  {
    path: '/bc',
    name: 'Bc',
    component: () => import(/* webpackChunkName: "bc" */ '../views/Bc.vue')
  },
  {
    path: '/googlemap',
    name: 'GoogleMap',
    component: () => import(/* webpackChunkName: "googlemap" */ '../views/GoogleMap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
