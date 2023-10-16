import axios from 'axios'
import { useMeuns } from './menu'
import { useMockMenus } from './mock/menu'
import { usePatients } from './Patient'
import { useMockPatient } from './mock/Patient'
import { useAuthStore } from '@/store/auth'
import MockAdapter from 'axios-mock-adapter'

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

// [dev] 加入開發用的假 api interceptors
if (import.meta.env.DEV) {
  let mock = new MockAdapter(api)
  useMockMenus(mock) // 使用假的 menus
  useMockPatient(mock) // 使用假的 patient
}
//#endregion

//#region 這裡撰寫 api
useMeuns(api) // 讓 api 有 useMenus 功能
usePatients(api)
//#endregion

// 使用 composable 寫法
export const useApi = app => {
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$api = api
}
// https://ithelp.ithome.com.tw/articles/10230336
