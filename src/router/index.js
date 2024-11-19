import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/index',
    component: () => import('@/views/certificatModify/index.vue'),
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('@/views/certificatModify/index.vue'),
    }]
  }],
})

export default router
