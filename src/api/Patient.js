export function usePatients(api) {
  // [範例] 計算 offset, limit, 0 就是不限制回傳資料，最多回傳 50 筆資料
  api.GetPatientPagination = async (limit = 0, offset = 0) =>
    (await api(`/api/patient/pagination?limit=${limit}&offset=${offset}`)).data
  // 不考慮分頁的結果，一次取得全部資料
  api.GetPatient = async () => (await api(`/api/patient`)).data
  api.AddPatient = async item => await api.post(`/api/patient`, item)
}
