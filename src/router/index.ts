import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutMe.vue'),
      /* 子路由 */
      children: [
        {
          path: '/about1',
          name: 'child',
          component: () => import('@/components/ChildView.vue')
          },
          {
            path: '/about2',
            name: 'child2',
            component: () => import('@/components/ChildView2.vue')
            }

        ]
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/ArticlePage.vue'),
    },
    /* 404页面 */
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
      }
  ]
})

export default router
