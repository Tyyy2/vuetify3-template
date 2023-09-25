// Utilities
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menus', {
  state: () => ({
    raw: [],
    menus: [],
  }),
  getters:{
  },
  actions: {
    async GetMenus(){
      const raw = await this.$api.GetMenus()
      const menus = transformMenu(raw)
      const menutree = makeMenuTree(menus)
      this.menus = menutree
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
      if(type === 3) others.to = { name: 'AdminFrame', params:{ url } }
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
//#endregion
