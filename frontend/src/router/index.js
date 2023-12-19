import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogInView.vue')
  },
  {
    path: '/addPost',
    name: 'addpost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPostView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
