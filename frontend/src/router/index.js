import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../../auth";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
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
    component: () => import( '../views/ContactUsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
