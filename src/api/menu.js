export function useMeuns(api) {
  // [範例] 計算 offset, limit, 0 就是不限制回傳資料，最多回傳 50 筆資料
  api.GetMenusPagination = async (limit = 0, offset = 0) =>
    (await api(`/api/menus/pagination?limit=${limit}&offset=${offset}`)).data
  // 不考慮分頁的結果，一次取得全部資料
  api.GetMenus = async () => (await api(`/api/menus`)).data
  api.AddMenus = async item => await api.post(`/api/menus`, item)
}
