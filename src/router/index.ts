import { createRouter, createWebHistory } from 'vue-router'
import Blog from "@/components/Blog.vue"
import Account from "@/components/Account.vue"
import User from "@/components/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: User
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})

export default router
