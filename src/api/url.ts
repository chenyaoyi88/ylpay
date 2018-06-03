const WEBVIEW_HOST: string = 'https://m.gzkkonline.com';

/** webview */
export const WEBVIEW_URL = {
  /** 帮助中心 */
  HELP: `${WEBVIEW_HOST}/help`,
  /** 服务协议 */
  PROTOCOL: `${WEBVIEW_HOST}/protocol/`,
  /** 关于我们 */
  ABOUT: `${WEBVIEW_HOST}/about/`,
  /** 借款合同 */
  CONTRACT: `${WEBVIEW_HOST}/contract/`
};

/** 外链 */
export const LINKING = {
  /** APP_STORE 地址（appid 填写该 APP 的 appid） */
  APP_STORE: 'https://itunes.apple.com/cn/app/appid'
};

/** KEY 管理 */
const KEY = {
  MAP_GAODE: '7bdff51a90917e3ba60184c804cb8140'
}

/** 需要用到的外部 url */
export const EXTERNAL = {
  /** 高德地图逆地理编码API服务地址（顺序：纬度,经度） */
  POSITION_GAODE: 'http://restapi.amap.com/v3/geocode/regeo?output=json&key=' + KEY.MAP_GAODE
}