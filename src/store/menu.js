// Utilities
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menus', {
  state: () => ({
    menus: [],
  }),
  getters:{
    menuTree(){
      const menus = transformMenu(this.menus)
      return makeMenuTree(menus)
    },
  },
  actions: {
    async GetMenus(){
      this.menus = await this.$api.GetMenus()
    }
  }
})

//#region menu 處理的邏輯
function transformMenu(raws){
  return raws.map(x => {
    const {url, type, prepend, ...others} = x
    if(!!prepend) others.prependIcon = prepend
    if(!!url){
      if(type === 0) others.to = url
      if(type===1 || type === 2) others.href = url
      if(type===2) others.target = '_blank'
      if(type === 3) others.to = { name: 'FrontFrame', params:{ url } }
    }
    return others
  })
}
function makeMenuTree(raws, parent = null){
  const nextList = !!parent
    ? raws.filter(x => x.parent === parent)
    : raws.filter(x => !x.parent)
  return nextList.map( x => {
      const haveChild = raws.some(y => y.parent === x.id)
      if(haveChild) x.children = makeMenuTree(raws, x.id)
      return  x
    })
}
export const deCodeUrlType = (type) => ({
  "-": "-",
  0: "前端路由",
  1: "外部連結",
  2: "另開外部連結",
  3: "iframe 內框",
}[!!type || (type === 0 ? 0 : "-")])
//#endregion
