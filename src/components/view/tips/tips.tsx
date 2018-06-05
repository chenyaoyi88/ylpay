"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { Icon } from '../../../components';
import { pxToDp } from '../../../shared';

interface TipsProps {
  // 外包裹样式
  tipsWrapStyle?: any;
  // icon样式
  iconStyle?: any;
  // 文字样式
  tipsText?: string;
  // icon尺寸
  size?: number;
  // 文字显示
  text?: string;
}

class Tips extends React.Component<TipsProps, null> {

  constructor(props: TipsProps) {
    super(props);
  }

  static defaultProps = {
    tipsWrapStyle: {},
    iconStyle: {},
    tipsText: {},
    size: 24,
    text: ''
  }

  render() {

    const { tipsWrapStyle, iconStyle, tipsText, size, text, children } = this.props;
    
    return (
      <View style={[styles.tips, tipsWrapStyle]}>
        <Icon iconStyle={[iconStyle]} size={size} name={'unauth'}></Icon>
        <Text style={[styles.tipsText, tipsText]}>{text || children}</Text>
      </View>
    );
  }
}

interface WallProps {
  textDark?: string;
  textLight?: string;
  children?: any;
}

class Wall extends React.Component<WallProps, null> {

  constructor(props: WallProps) {
    super(props);
  }

  static defaultProps = {
    textDark: '',
    textLight: '',
    children: ''
  }

  render() {
    const { textDark, textLight, children } = this.props;
    return (
      <View style={[styles.wall]}>
        <Text style={[styles.wallTextDark]}>{textDark || this.props.children}
          <Text style={[styles.wallTextLight]}>{textLight}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tips: {
    height: pxToDp(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tipsText: {
    fontSize: pxToDp(24),
    color: '#ababab'
  },

  wall: {
    width: '100%',
    height: pxToDp(98),
    paddingLeft: pxToDp(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  wallTextDark: {
    fontSize: pxToDp(24),
    color: '#4c4c4c'
  },
  wallTextLight: {
    color: '#8f8f94'
  }
});

export { Tips, Wall };