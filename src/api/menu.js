export function useMeuns(api){
  api.GetMenus = async ()=> (await api('/api/menus')).data
  api.AddMenus = async (item)=> await api.post('/api/menus', item)
}
