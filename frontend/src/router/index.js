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
    component: () => import( '../views/LogInView.vue')
  },
  {
    path: '/addPost',
    name: 'addpost',
    component: () => import( '../views/AddPostView.vue')
  },
  {
    path: "/apost/:id",
    name: "APost",
    component: () => import( '../views/APostView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/SignUpView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
