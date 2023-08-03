import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'Template',
        name: 'Template',
        children: [
          {
            path: 'Dayjsx',
            name: 'Dayjsx',
            component: () => import('@/views/Template/Dayjsx.vue'),
            props: true
          }
        ]
      },
      // 新增 Search 頁面路由設置
      {
        path: 'Search',
        name: 'Search',
        // 動態載入(Lazy Loading)語法
        component: () => import('@/views/Search.vue'),
      },
      // 新增 Search 頁面路由設置
      {
        path: 'Admin',
        name: 'Admin',
        // 動態載入(Lazy Loading)語法
        // component: () => import('@/views/Search.vue'),
        children: [
          {
            path: 'Frame/:url',
            name: 'AdminFrame',
            component: () => import('@/views/Admin/FramePage.vue'),
            props: true
          }
        ]
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
            props: true
          }
        ]
      },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 正確的寫法
  routes,
})
export default router
