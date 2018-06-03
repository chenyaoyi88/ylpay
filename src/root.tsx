import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// 引入react-redux
// import { Provider } from 'react-redux';
// // 引入 store 文件，下步会创建
// import configureStore from './store/ConfigureStore';
// // 调用 store 文件中的 rootReducer 常量中保存的方法
// const store = configureStore();

import App from './App';

type Props = {};
export default class Root extends Component<Props> {
  render() {
    // return (
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );
    return <App />;
  }
}
