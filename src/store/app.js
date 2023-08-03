// Utilities
import { defineStore } from 'pinia'

const loadingTags= []
const initProcedue = []
const afterInitCallBack = []
export const useAppStore = defineStore('app', {
  state: () => ({
    inited: false,
  }),
  getters:{
    loading(){
      return loadingTags.length > 0
    }
  },
  actions: {
    // 添加 app 啟動程序
    addInitProcedure(func) {
      initProcedue.push(func);
    },
    // 啟動 app
    async init() {
      initProcedue.forEach(async (x) => await x());
      this.inited = true;
      afterInitCallBack.forEach((x) => x());
    },
    // 添加啟動 app 之後要做的事
    onInited(func) {
      afterInitCallBack.push(func);
    },
    // 加入 loading tag
    AddLoading(key){
      loadingTags.push(key)
    },
    // 移除 loading tag
    RemoveLoading(key){
      const idx = loadingTags.indexOf(key)
      if(idx !== -1) loadingTags.splice(idx, 1)
    }
  }
})
