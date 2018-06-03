// 环境变量
/**
 * __DEV__: react-native 全局变量，当在 android || ios 在非打包出来的环境下运行时为 true
 */
let APP_ENV: string = __DEV__ ? 'development' : 'production';

// 开发环境
const ENV_DEV = {
  URL: 'http://192.168.1.242:8046',
  FILE_URL: 'http://192.168.1.242:3028'
};

// 测试环境
const ENV_TEST = {
  URL: 'http://test.appgateway.gzkkonline.com',
  FILE_URL: 'http://test.file-server.gzkkonline.com'
};

// 预生产环境
const ENV_READY = {
  URL: 'https://ready-appgateway.gzkkonline.com',
  FILE_URL: 'https://ready-fileserver.gzkkonline.com'
};

// 生产环境
const ENV_PROD = {
  URL: 'http://test.appgateway.gzkkonline.com',
  FILE_URL: 'http://test.file-server.gzkkonline.com'

  // URL: 'https://ready-appgateway.gzkkonline.com',
  // FILE_URL: 'https://ready-fileserver.gzkkonline.com',

  // URL: 'http://appgateway.gzkkonline.com',
  // FILE_URL: 'http://fileserver.gzkkonline.com'
};

// 请求地址
let APP_MAIN_HOST: string = '';
// 文件服务器请求地址
let APP_FILE_HOST: string = '';

switch (APP_ENV) {
  case 'production':
    APP_MAIN_HOST = ENV_PROD.URL;
    APP_FILE_HOST = ENV_PROD.FILE_URL;
    break;
  case 'test':
    APP_MAIN_HOST = ENV_TEST.URL;
    APP_FILE_HOST = ENV_TEST.FILE_URL;
    break;
  case 'ready':
    APP_MAIN_HOST = ENV_READY.URL;
    APP_FILE_HOST = ENV_READY.FILE_URL;
    break;
  case 'development':
    APP_MAIN_HOST = ENV_DEV.URL;
    APP_FILE_HOST = ENV_DEV.FILE_URL;
    break;
}

// API接口地址
const API = {
  // 登录
  LOGIN: `${APP_MAIN_HOST}/personalCenter/v1/vcodeLogin`,
  // 注册
  REGIST: `${APP_MAIN_HOST}/cash/user/register`,
  // 验证码
  VCODE: `${APP_MAIN_HOST}/personalCenter/v1/achieveVerification`,
  // 绑卡验证码
  BINDVCODE: `${APP_MAIN_HOST}/personalCenter/main/v1/bindBankCard/verifyCode`,
  // 忘记密码
  FINDLOGINPWD: `${APP_MAIN_HOST}/cash/user/findLoginPwd`,

  // 文件上传接口
  FILEUPLOAD: `${APP_FILE_HOST}/v1/ful/privacy`,
  // 文件下载接口
  FILEDOWNLOAD: `${APP_FILE_HOST}/v1/fdl/`
};

export { API };
