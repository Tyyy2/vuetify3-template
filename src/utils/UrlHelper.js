export default class UrlHelper {
  static GetParam(url, key, caseSensitive = false) {
    const keys = this.GetKeysInsensitive(url, key)
    return keys.length === 0 ? null : url.searchParams.get(keys[0])
  }
  static RemoveKey = (url, removekey, caseSensitive = false) => {
    const keys = this.GetKeysInsensitive(url, removekey)
    keys.forEach(k => url.searchParams.delete(k))
    return url
  }
  static GetQueryObj = url => {
    const query = {}
    for (const [key, value] of url.searchParams) {
      query[key] = value
    }
    return query
  }
  static GetKeysInsensitive = (url, key) => {
    const keys = []
    for (const [k, _] of url.searchParams) {
      const isMatch = k.toLowerCase() === key.toLowerCase()
      if (isMatch) keys.push(k)
    }
    return keys
  }
}
