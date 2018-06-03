import {
    AppRegistry
} from 'react-native';
import Root from './src/root';
import {
    YellowBox
} from 'react-native';

// 处理 react-navigation 带来的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('ylpay', () => Root);