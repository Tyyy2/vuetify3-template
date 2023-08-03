import { AxiosInstance } from "axios";
type API = AxiosInstance & {
  // ajax function type definition
  GetUser: () => Promise<Array<{name: string, age: number}>>
}
declare const api: API
export default api
