import { createStackNavigator } from 'react-navigation';

import { ScanScreen, HomeScreen, BankcardScreen } from './pages';

import DetailsScreen from './pages/details';
// import HomeScreen from './pages/home';

import React from 'react';
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Easing,
  Animated
} from 'react-native';

export default createStackNavigator(
  // 页面路由设置
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Scan: ScanScreen,
    Bankcard: BankcardScreen
  },
  // 路由可选项设置
  {
    // 默认路由
    initialRouteName: 'Home',
    // 路由风格设置
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#E76F00'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
        color: '#fff',
        textAlign: 'center',
        flex: 1
      },
      // 占位符，让安卓居中
      headerRight: <View />,
      gesturesEnabled: true
    },
    mode: 'card',
    headerMode: 'screen',
    headerTransitionPreset: 'uikit',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 150,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: (sceneProps: any) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateX: translateX }] };
      }
    })
  }
);
