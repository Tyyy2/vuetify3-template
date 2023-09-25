<<<<<<< HEAD
import { Menu } from "@/components/SideMenu"
import api from "@/api"
const rawMenus = [
  //#region Menus 從後端 rmdb 拿資料的範例，可簡單通過 getMenus 拿到 menuTree
  { id:'00', title: "首頁", prependIcon: "mdi-home", to:"/" },
  { id:'0A', title: "範例", prependIcon: "mdi-home"},
  // { id:'0A1', parent: '0A', title: "時間", prependIcon: "mdi-account-multiple-outline", to: '/Template/Dayjsx' },
  { id:'0A1', parent: '0A', title: "時間", prependIcon: "mdi-account-multiple-outline", to: '/Template/Dayjsx' },
=======
import { Menu } from '@/components/SideMenu'
const rawMenus = [
  //#region Menus 從後端 rmdb 拿資料的範例，可簡單通過 getMenus 拿到 menuTree
  { id: '00', title: '首頁', prependIcon: 'mdi-home', to: '/' },
  { id: '0A', title: '範例', prependIcon: 'mdi-home' },
  {
    id: '0A1',
    parent: '0A',
    title: '時間',
    prependIcon: 'mdi-account-multiple-outline',
    to: '/dayjsx',
  },
>>>>>>> a6d500e147701bc4c0c6d0554271feade9ca70f5
  // { id:'0A', title: "搜尋", prependIcon: "mdi-home", to:"/Search" },
  { id: '01', title: '日常行政', prependIcon: '' },
  {
    id: '013',
    parent: '01',
    title: '院內信箱',
    prependIcon: 'mdi-account-multiple-outline',
    href: 'https://zimbra.ktgh.com.tw/',
    target: '_blank',
  },
  {
    id: '010',
    parent: '01',
    title: '資訊室班表',
    prependIcon: 'mdi-account-multiple-outline',
    href: 'http://websvc.ktgh.com.tw:9005/HR/HraClassSch/Default.aspx',
    target: '_blank',
  },
  {
<<<<<<< HEAD
    id:'011', parent: '01', title: "單位要處理的事項", prependIcon: "mdi-account-multiple-outline",
    href: '/Admin/Frame/https:%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s'
    // to: {
    //   name: 'AdminFrame',
    //   params: { url: 'https://docs.google.com/spreadsheets/d/1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s' }
    // }
=======
    id: '011',
    parent: '01',
    title: '單位要處理的事項',
    prependIcon: 'mdi-account-multiple-outline',
    to: {
      name: 'FrontFrame',
      params: {
        url: 'https://docs.google.com/spreadsheets/d/1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s',
      },
    },
>>>>>>> a6d500e147701bc4c0c6d0554271feade9ca70f5
  },
  {
    id: '012',
    parent: '01',
    title: '軟體課要處理的事項',
    prependIcon: 'mdi-cog-outline',
    to: {
      name: 'FrontFrame',
      params: {
        url: 'https://docs.google.com/spreadsheets/d/1yF-Xl3q2-q92wKSx2vvkOCAwlNl4AP1sZGwjrRbj8lw',
      },
    },
  },
  {
    id: '014',
    parent: '01',
    title: 'EIP1-server1',
    prependIcon: 'mdi-account-multiple-outline',
    href: 'http://apclu1.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
    target: '_blank',
  },
  {
    id: '015',
    parent: '01',
    title: 'EIP-server2',
    prependIcon: 'mdi-account-multiple-outline',
    href: 'http://apclu2.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
    target: '_blank',
  },
  {
    id: '016',
    parent: '01',
    title: '數位學習',
    prependIcon: 'mdi-account-multiple-outline',
    href: 'https://lms.ktgh.com.tw/',
    target: '_blank',
  },
  //#endregion
  //#region Menus 寫死在前端的範例，較易閱讀，不需(可有可無)通過 getMenus 拿到 menuTree
  {
    id: '02',
    title: '工具',
    prependIcon: '',
    children: [
      {
        id: '021',
        title: '第二層目錄',
        prependIcon: 'mdi-plus-outline',
        children: [
          { id: '0211', title: '第三層物件', prependIcon: 'mdi-plus-outline' },
          { id: '0212', title: '第三層物件', prependIcon: 'mdi-file-outline' },
          { id: '0213', title: '第三層物件', prependIcon: 'mdi-update' },
          {
            id: '0214',
            title: '第三層物件',
            prependIcon: 'mdi-delete',
            href: 'https://google.com',
          },
        ],
      },
      {
        id: '022',
        title: 'ChatGPT',
        prependIcon: 'mdi-file-outline',
        href: 'https://chat.openai.com/chat',
        target: '_blank',
      },
      { id: '023', title: '第二層物件', prependIcon: 'mdi-update' },
      {
        id: '024',
        title: '第二層物件',
        prependIcon: 'mdi-delete',
        href: 'https://google.com',
      },
    ],
  },
  {
    id: '03',
    title: '第一層物件',
    prependIcon: 'mdi-delete',
    href: 'https://google.com',
  },
  //#endregion
] as Array<Menu>

function getMenus(node?: Menu): Array<Menu> {
  const isLevel1 = !node // get level 1 flag
  // get current level nodes
  const currentLevelNodes = rawMenus.filter(x =>
    isLevel1 ? !x.parent : x.parent === node.id
  )
  // make current level nodes get children
  currentLevelNodes.forEach(x => getMenus(x))
  // return level 1 nodes only
  if (isLevel1) return currentLevelNodes
  // attach children to parent node
  if (currentLevelNodes.length > 0)
    node.children
      ? node.children.push(currentLevelNodes)
      : (node.children = currentLevelNodes)
}

export default getMenus()
