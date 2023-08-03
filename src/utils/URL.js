export const GetSearchParams = () => {
  const href = window.location.href;
  const idx = href.indexOf('?');
  const querystring = href.substring(idx);
  const urlParams = new URLSearchParams(querystring);
  return urlParams;
};

export class URL {
  static removeCaseInsensitive(key) {
    var url = window.location.href;
    var regex = new RegExp(`([&?])${key}=([^&]*)`, 'gi');
    var newUrl = url.replace( regex, (_, separator) => separator === '?' || separator === '&' ? separator : '');
    newUrl = newUrl.replace(/\?$/, '')
    window.history.replaceState({}, document.title, newUrl);
    return newUrl
  }
  static getCaseInsensitive(key) {
    const params = URL.URLSearchParams
    for(var [k, v] of params.entries()){
      if(k.toLowerCase() === key) return v
    }
    return null
  }
  static get URLSearchParams(){
    const href = window.location.href;
    const idx = href.indexOf('?');
    const querystring = href.substring(idx);
    const urlParams = new URLSearchParams(querystring);
    return urlParams;
  }
}
