import axios from 'axios'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { parseJwt } from '@/utils/Jwt'
import UrlHelper from '@/utils/UrlHelper'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useLocalStorage('token', null),
    reflashHour: 0.5,
    isLogin: false,
  }),
  getters: {
    payload: ({ token }) => (!token ? {} : parseJwt(token)),
    tokenValid(){
      const  { exp } = this.payload || {}
      return !!exp ? exp*1000 - Date.now() > 0 : false
    },
  },
  actions: {
    async CheckToken(){
      if (!this.token) return this.Logout()
      const  { exp } = this.payload
      const shift = exp * 1000 - Date.now()
      if( shift < 0) return this.Logout()
      // 檢查 exp 和 new Date 的距離是否超過 reflashHour
      if( shift < this.reflashHour*3600*1000 ) {
        this.token = await SSO.GetReflashToken(this.token)
      }
    },
    // 嘗試登入
    async Authentication() {
      //#region 拿到 token 或 key
      const url = new URL(window.location.href)
      const key = UrlHelper.GetParam(url, 'key')
      if (!!key) this.token = await SSO.GetToken(key)
      if (!this.tokenValid) this.Logout()
      //#endregion

      //#region 設置為登入狀態、通知大家有 token 了
      this.isLogin = true
      //#endregion
    },
    async RemoveKey() {
      let url = new URL(window.location.href)
      url = UrlHelper.RemoveKey(url, 'key')
      const query = UrlHelper.GetQueryObj(url)
      const path = url.pathname
      this.router.replace({ path, query })
    },
    async Logout() {
      this.token = null
      SSO.goLogin()
    },
  },
})

class SSO {
  static baseUrl = 'https://sso.ktgh.com.tw'
  static goLogin = () =>
    (window.location.href = `${this.baseUrl}?returnurl=${window.location.href}`)
  static async GetToken(key) {
    const url = `${this.baseUrl}/api/token`
    const data = { key }
    const res = await axios.post(url, data)
    return res.data.success ? res.data.token : null
  }
  static async GetReflashToken(token) {
    const url = `${this.baseUrl}/api/token/reflash`
    const headers = { "Authorization": `Bearer ${token}` }
    const res = await axios.get(url, {headers})
    return res.data.Token
  }
}
