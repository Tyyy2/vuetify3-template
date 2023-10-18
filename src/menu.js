const URL_CONST = {
  院內信箱: 'https://zimbra.ktgh.com.tw/',
  資訊室班表: 'http://websvc.ktgh.com.tw:9005/HR/HraClassSch/Default.aspx',
  單位要處理的事項:
    'https://docs.google.com/spreadsheets/d/1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s',
  軟體課要處理的事項:
    'https://docs.google.com/spreadsheets/d/1yF-Xl3q2-q92wKSx2vvkOCAwlNl4AP1sZGwjrRbj8lw',
  'EIP1-server1': 'http://apclu1.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
  'EIP-server2': 'http://apclu2.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
  數位學習: 'https://lms.ktgh.com.tw/',
}
export let MENUS = [
  //#region Menus 從後端 rmdb 拿資料的範例，可簡單通過 getMenus 拿到 menuTree
  { id: '00', parent: null, title: '首頁', prepend: 'mdi-home', to: '/' },
  { id: '0A', parent: null, title: '範例', prepend: 'mdi-home' },
  {
    id: '0A1',
    parent: '0A',
    title: '時間',
    prepend: 'mdi-account-multiple-outline',
    url: '/dayjsx',
    type: 0,
  },
  {
    id: '0A2',
    parent: '0A',
    title: 'IFrame',
    prepend: 'mdi-account-multiple-outline',
    url: '/frame/https%3A%2F%2Fwww.ktgh.com.tw%2FDefault.asp',
    type: 0,
  },
  {
    id: '0A3',
    parent: '0A',
    title: 'IFrame映射',
    prepend: 'mdi-account-multiple-outline',
    url: '/frameReflector',
    type: 0,
  },
  { id: '01', parent: null, title: '日常行政', prepend: '' },
  {
    id: '013',
    parent: '01',
    title: '院內信箱',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST.院內信箱,
    type: 2,
  },
  {
    id: '010',
    parent: '01',
    title: '資訊室班表',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST.資訊室班表,
    type: 2,
  },
  {
    id: '011',
    parent: '01',
    title: '單位要處理的事項',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST.單位要處理的事項,
    type: 3,
  },
  {
    id: '012',
    parent: '01',
    title: '軟體課要處理的事項',
    prepend: 'mdi-cog-outline',
    url: URL_CONST.軟體課要處理的事項,
    type: 3,
  },
  {
    id: '014',
    parent: '01',
    title: 'EIP1-server1',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST['EIP-server2'],
    type: 2,
  },
  {
    id: '015',
    parent: '01',
    title: 'EIP-server2',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST['EIP-server2'],
    type: 2,
  },
  {
    id: '016',
    parent: '01',
    title: '數位學習',
    prepend: 'mdi-account-multiple-outline',
    url: URL_CONST.數位學習,
    type: 2,
  },
  //#endregion
  //#region Menus 寫死在前端的範例，較易閱讀，不需(可有可無)通過 getMenus 拿到 menuTree
  { id: '02', parent: null, title: '工具', prepend: '' },
  { id: '021', parent: '02', title: '第二層目錄', prepend: 'mdi-plus-outline' },
  {
    id: '0211',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-plus-outline',
  },
  {
    id: '0212',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-file-outline',
  },
  { id: '0213', parent: '021', title: '第三層物件', prepend: 'mdi-update' },
  {
    id: '0214',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-delete',
    url: 'https://google.com',
    type: 2,
  },
  {
    id: '022',
    parent: '02',
    title: 'ChatGPT',
    prepend: 'mdi-file-outline',
    url: 'https://chat.openai.com/chat',
    type: 2,
  },
  { id: '023', parent: '02', title: '第二層物件', prepend: 'mdi-update' },
  {
    id: '024',
    parent: '02',
    title: '第二層物件',
    prepend: 'mdi-delete',
    url: 'https://google.com',
    type: 2,
  },
  { id: '021', parent: '02', title: '第二層目錄', prepend: 'mdi-plus-outline' },
  {
    id: '0211',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-plus-outline',
  },
  {
    id: '0212',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-file-outline',
  },
  { id: '0213', parent: '021', title: '第三層物件', prepend: 'mdi-update' },
  {
    id: '0214',
    parent: '021',
    title: '第三層物件',
    prepend: 'mdi-delete',
    url: 'https://google.com',
    type: 2,
  },
  {
    id: '022',
    parent: '02',
    title: 'ChatGPT',
    prepend: 'mdi-file-outline',
    url: 'https://chat.openai.com/chat',
    type: 2,
  },
  { id: '023', parent: '02', title: '第二層物件', prepend: 'mdi-update' },
  {
    id: '024',
    parent: '02',
    title: '第二層物件',
    prepend: 'mdi-delete',
    url: 'https://google.com',
    type: 2,
  },
  {
    id: '03',
    parent: null,
    title: '第一層物件',
    prepend: 'mdi-delete',
    url: 'https://google.com',
    type: 2,
  },
  // //#endregion
]
//#region menu 處理的邏輯
export function transformMenu(raws){
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
export function makeMenuTree(raws, parent = null){
  const nextList = !!parent
    ? raws.filter(x => x.parent === parent)
    : raws.filter(x => !x.parent)
  return nextList.map( x => {
      const haveChild = raws.some(y => y.parent === x.id)
      if(haveChild) x.children = makeMenuTree(raws, x.id)
      return  x
    })
}

export const URL_TYPE = new Map([
    [0, "前端路由"],
    [1, "外部連結"],
    [2, "另開外部連結"],
    [3, "iframe 內框"],
  ])
//#endregion

// 轉成 vuetify 格式
export const menus = transformMenu(MENUS);
export const menuTree = makeMenuTree(menus);
