declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.json';

interface Props_Navigation {
  // 进入一个新页面（重复进入当前页面时候使用）
  push(name?: string, params?: any): void;
  // 进入一个新页面
  navigate(name?: string, params?: any): void;
  // 返回上一个页面
  goBack(name?: string, params?: any): void;
  // 获取参数
  getParam?: any;
  setParams?: any;
  // 获取参数
  state: {
    params: any;
  };
}
