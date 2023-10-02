import  MockAdapter  from 'axios-mock-adapter'


const URL = {
  院內信箱 : 'https://zimbra.ktgh.com.tw/',
  資訊室班表:'http://websvc.ktgh.com.tw:9005/HR/HraClassSch/Default.aspx',
  單位要處理的事項:'https://docs.google.com/spreadsheets/d/1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s',
  軟體課要處理的事項:'https://docs.google.com/spreadsheets/d/1yF-Xl3q2-q92wKSx2vvkOCAwlNl4AP1sZGwjrRbj8lw',
  'EIP1-server1':'http://apclu1.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
  'EIP-server2':'http://apclu2.ktgh.com.tw:7777/Sec/Sec/StartSec.do',
  '數位學習':'https://lms.ktgh.com.tw/',
}
let MENUS = [
  //#region Menus 從後端 rmdb 拿資料的範例，可簡單通過 getMenus 拿到 menuTree
  { id: '00', parent: null, title: "首頁", prepend: "mdi-home", to:"/" },
  { id: '0A', parent: null, title: "範例", prepend: "mdi-home"},
  { id: '0A1', parent: '0A', title: "時間", prepend: "mdi-account-multiple-outline", url: '/dayjsx', type:0 },
  { id: '01', parent: null, title: "日常行政", prepend: "" },
  { id: '013', parent: '01', title: "院內信箱", prepend: "mdi-account-multiple-outline", url: URL.院內信箱, type: 2 },
  { id: '010', parent: '01', title: "資訊室班表", prepend: "mdi-account-multiple-outline", url: URL.資訊室班表, type: 2 },
  { id: '011', parent: '01', title: "單位要處理的事項", prepend: "mdi-account-multiple-outline", url: URL.單位要處理的事項, type: 3 },
  { id: '012', parent: '01', title: "軟體課要處理的事項", prepend: "mdi-cog-outline" , url: URL.軟體課要處理的事項, type: 3 },
  { id: '014', parent: '01', title: "EIP1-server1", prepend: "mdi-account-multiple-outline", url: URL["EIP-server2"], type: 2 },
  { id: '015', parent: '01', title: "EIP-server2", prepend: "mdi-account-multiple-outline", url: URL["EIP-server2"], type: 2 },
  { id: '016', parent: '01', title: "數位學習", prepend: "mdi-account-multiple-outline", url: URL.數位學習, type:2 },
  //#endregion
  //#region Menus 寫死在前端的範例，較易閱讀，不需(可有可無)通過 getMenus 拿到 menuTree
  { id: '02', parent: null, title: "工具", prepend: "", },
  { id: '021', parent: '02', title: "第二層目錄", prepend: "mdi-plus-outline" , },
  { id: '0211', parent: '021', title: "第三層物件", prepend: "mdi-plus-outline" },
  { id: '0212', parent: '021', title: "第三層物件", prepend: "mdi-file-outline" },
  { id: '0213', parent: '021', title: "第三層物件", prepend: "mdi-update" },
  { id: '0214', parent: '021', title: "第三層物件", prepend: "mdi-delete", url: "https://google.com", type: 2 },
  { id: '022', parent: '02', title: "ChatGPT", prepend: "mdi-file-outline" , url: 'https://chat.openai.com/chat', type: 2 },
  { id: '023', parent: '02', title: "第二層物件", prepend: "mdi-update" },
  { id: '024', parent: '02', title: "第二層物件", prepend: "mdi-delete", url: "https://google.com", type: 2},
  { id: '021', parent: '02', title: "第二層目錄", prepend: "mdi-plus-outline" },
  { id: '0211', parent: '021', title: "第三層物件", prepend: "mdi-plus-outline" },
  { id: '0212', parent: '021', title: "第三層物件", prepend: "mdi-file-outline" },
  { id: '0213', parent: '021', title: "第三層物件", prepend: "mdi-update" },
  { id: '0214', parent: '021', title: "第三層物件", prepend: "mdi-delete", url: "https://google.com", type: 2 },
  { id: '022', parent: '02', title: "ChatGPT", prepend: "mdi-file-outline" , url: 'https://chat.openai.com/chat', type: 2 },
  { id: '023', parent: '02', title: "第二層物件", prepend: "mdi-update" },
  { id: '024', parent: '02', title: "第二層物件", prepend: "mdi-delete", url: "https://google.com", type: 2 },
  { id: '03', parent: null, title: "第一層物件", prepend: "mdi-delete", url: "https://google.com", type: 2 },
  // //#endregion
]
export const useMockMenus = (mock)=>{
  mock.onGet('/api/menus').reply(200, MENUS)
  mock.onPost('/api/menus').reply(function(config){
    const newItem = JSON.parse(config.data)
    MENUS.push(newItem)
    return [201, {message: 'Item created'}]
  })
}
