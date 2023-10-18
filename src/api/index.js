import axios from 'axios'
import { useAuthStore } from '@/store/auth'

const baseURL = import.meta.env.VITE_API_URL
export const api = axios.create({ baseURL })

//#region axios interceptors
function requestHandler(config) {
  // 設定 api 送出前要做的事
  const auth = useAuthStore()
  auth.CheckToken()
  config.headers.Authorization = `Bearer ${auth.token}`;
  return config
}
api.interceptors.request.use(requestHandler)

function responseHandler(res) {
  // 收到回應要做的事，例如收到 401, 402... 的動作
  return res
}
api.interceptors.response.use(responseHandler)

// 使用 composable 寫法
export const useApi = app => {
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$api = api
}
// https://ithelp.ithome.com.tw/articles/10230336
