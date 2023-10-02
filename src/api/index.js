import { tokenObservers } from '@/store/auth';
import axios from 'axios'
import { useMeuns } from './menu';
import { useMockMenus } from './testdata/menu';
import MockAdapter from 'axios-mock-adapter'

//#region create axios instance
const baseURL = import.meta.env.DEV ? '/' : 'https://yourapidomain.ktgh.com.tw/maybe/subfolder/';
export const api = axios.create({ baseURL });

function requestHandler(config){
// 設定 api 送出前要做的事
  return config;
}
api.interceptors.request.use(requestHandler)

function responseHandler(res){
  // 收到回應要做的事，例如收到 401, 402... 的動作
  return res;
}
api.interceptors.response.use(responseHandler)
// //#endregion

// // 當獲得 token 的時候把 token 加到 header
const tokenCallBack = (token) => api.defaults.headers.common['Authorization']= `Bearer ${token}`
tokenObservers.push(tokenCallBack)

// //#region 這裡撰寫 api
useMeuns(api) // 讓 api 有 useMenus 功能
// //#endregion

let mock = new MockAdapter(api)
useMockMenus(mock) // [dev] 加入開發用的假 api middleware

// // 使用 composable 寫法
export const useApi = (app) =>{
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$api = api
}
// // https://ithelp.ithome.com.tw/articles/10230336
