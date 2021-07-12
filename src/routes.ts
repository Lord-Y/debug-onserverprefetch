import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/store',
    component: () => import('@/views/Store.vue'),
  },
]

export default routes
