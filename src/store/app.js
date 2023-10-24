// Utilities
import { defineStore } from 'pinia'

const initProcedue = []
const afterInitCallBack = []
export const useAppStore = defineStore('app', {
  state: () => ({
    inited: false, // 表示 state 是否已經初始化完畢
    loadingTags: []
  }),
  getters:{
    loading(){
      return this.loadingTags.length > 0
    }
  },
  actions: {
    // 添加 app 啟動程序，用來向觀察者列表中添加觀察者
    addInitProcedure(func) {
      initProcedue.push(func);
    },
    // 啟動 app
    async init() {
      initProcedue.forEach(async (x) => await x());
      // 將 initialized 設為 true，表示 app 已經初始化完畢
      this.inited = true;
      afterInitCallBack.forEach((x) => x());
    },
    // 添加啟動 app 之後要做的事
    onInited(func) {
      afterInitCallBack.push(func);
    },
    // 加入 loading tag
    AddLoading(key){
      this.loadingTags.push(key)
    },
    // 移除 loading tag
    RemoveLoading(key){
      const idx = this.loadingTags.indexOf(key)
      if(idx !== -1) this.loadingTags.splice(idx, 1)
    }
  }
})
