import axios from "axios";
import { nextTick } from "vue";
import { isJwtExpired } from "jwt-check-expiration";
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
import { parseJwt } from "@/utils/Jwt";
import UrlHelper from "@/utils/UrlHelper";
import router from '@/router'

export const tokenObservers = []
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useLocalStorage('token', null),
    isLogin: false,
  }),
  getters: {
    payload: ({ token }) => (!token ? {} : parseJwt(token)),
  },
  actions:{
    async onAuthentication(cb) {
      tokenObservers.push(cb);
    },
    // 嘗試登入
    async Authentication() {

      //#region 拿到 token 或 key
      const key = UrlHelper.GetParam('key');
      if (!key && (!this.token || isJwtExpired(this.token))) this.Logout();
      if (!!key) this.token = await SSO.GetToken(key);
      if (!this.token) return;
      //#endregion

      //#region 設置為登入狀態、通知大家有 token 了
      this.isLogin = true;
      tokenObservers.forEach((x) => x(this.token));
      //#endregion
    },
    async RemoveKey() {
      const route = router.currentRoute.value;
      const query = Object.keys(route.query)
        .filter((k) => k.toLowerCase() != 'key')
        .reduce((acc, current) => {
          const str = route.query[current]?.toString();
          if (!!str) acc[current] = str;
          return acc;
        }, {} );
      const path = window.location.pathname
      router.replace({ path, query });
    },
    async Logout() {
      this.token = null;
      SSO.goLogin();
    },
  }
})

class SSO {
  static baseUrl = 'https://sso.ktgh.com.tw';
  static goLogin = () =>
    (window.location.href = `${this.baseUrl}?returnurl=${window.location.href}`);
  static async GetToken(key) {
    const url = `${this.baseUrl}/api/token`;
    const data = { key };
    const res = await axios.post(url, data);
    return res.data.success ? res.data.token : null;
  }
}
