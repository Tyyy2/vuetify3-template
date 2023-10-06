export const useMockTemplate = (url, data) => {
  return mock => {
    // 不考慮分頁的結果，一次取得全部資料
    mock.onGet(url).reply(200, data)
    // [範例] 計算 offset, limit, 0 就是不限制回傳資料，最多回傳 50 筆資料
    mock.onGet(new RegExp(url + '/pagination.*')).reply(function (config) {
      const url = new URL(config.url, 'http://localhost')
      const params = url.searchParams
      const total = data.length
      const offset = parseInt(params.get('offset'))
      let limit = parseInt(params.get('limit'))
      if (limit == 0 || limit > 50) limit = 50
      const meta = { offset, limit, total }
      const items = data.slice(offset, limit + offset)
      return [200, { items, meta }]
    })
    // Create
    mock.onPost(url).reply(function (config) {
      const newItem = JSON.parse(config.data)
      data.push(newItem)
      return [201, { message: 'Item created' }]
    })
    // Update
    mock.onPut(url).reply(function (config) {
      const newItem = JSON.parse(config.data)
      const id = JSON.parse(config.data).identifier
      const item = data.find(patient => patient.identifier === id)
      Object.assign(item, newItem)
      return [201, { message: 'Item updated' }]
    })
    // Delete
    mock.onDelete(url).reply(function (config) {
      const id = JSON.parse(config.data).identifier
      const patient = data.find(patient => patient.identifier === id)
      data.splice(data.indexOf(patient), 1)
      return [200, { message: 'Item deleted' }]
    })
  }
}
