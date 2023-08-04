export default class UrlHelper {
  static GetParam(key, caseSensitive=false) {
    const params = UrlHelper.URLSearchParams
    for(var [k, v] of params.entries()){
      const isMatch = caseSensitive
        ? k === key
        : k.toLowerCase() === key.toLowerCase();
      if(isMatch) return v
    }
    return null
  }
  static get URLSearchParams(){
    const url = new URL(window.location.href);
    return url.searchParams;
  }
}
