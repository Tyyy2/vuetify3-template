import { tokenObservers } from '@/store/auth';
import axios from 'axios'

//#region create axios instance
const baseURL = '/api/'
const api = axios.create({ baseURL });

// 設定 api 送出前要做的事
function requestHandler(){ }
api.interceptors.request.use(requestHandler)

// 收到回應要做的事，例如收到 401, 402... 的動作
function responseHandler(){ }
api.interceptors.response.use(responseHandler)
//#endregion

// 當獲得 token 的時候把 token 加到 header
const tokenCallBack = (token) => api.defaults.headers.common['Authorization']= `Bearer ${token}`
tokenObservers.push(tokenCallBack)

//#region 這裡撰寫 api
// 模擬 ajax
api.GetUser = () => new Promise(res=>res([
  { id: 1, name: '', age: 22 },
  { id: 2, name: '', age: 22 },
  { id: 3, name: '', age: 22 },
  { id: 4, name: '', age: 22 },
  { id: 5, name: '', age: 22 },
  { id: 6, name: '', age: 22 },
]))
//#endregion

// 使用 composable 寫法
export const useApi = (app) =>{
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$api = api
}
// https://ithelp.ithome.com.tw/articles/10230336
