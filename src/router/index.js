import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 動態載入(Lazy Loading)語法
    // component: () => import('@/views/Search.vue'),
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'FrontHome',
        component: () => import('@/views/FrontHome/IndexPage.vue'),
      },
      {
        path: 'dayjsx',
        name: 'FrontDayjsx',
        component: () => import('@/views/FrontDayjsx/IndexPage.vue'),
      },
      {
        path: 'frame/:url',
        name: 'FrontFrame',
        component: () => import('@/views/FrontFrame/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/Admin',
    name: 'Admin',
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/AdminHome/IndexPage.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/Test',
    name: 'Test',
    // 動態載入(Lazy Loading)語法
    component: () => import('@/layouts/TestLayout.vue'),
    children: [
      {
        path: '',
        name: 'iframe',
        component: () => import('@/views/Test/IFrame.vue'),
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
  routes,
})
export default router
