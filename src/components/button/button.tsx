"use strict";
import * as React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Text,
  Platform
} from 'react-native';

import { pxToDp } from '../../utils';

interface NativeButtonPorps {
  // 按钮类型
  btnType?: string;
  // 按钮样式
  btnStyle?: any;
  // 按钮文字
  btnText?: string;
  // 文字颜色
  color?: string;
  // 是否要圆角
  btnRadius?: number;
  // 是否禁用
  disabled?: boolean;
  // 按钮事件
  onPress?: () => void;
}

class NativeButton extends React.Component<NativeButtonPorps, any> {

  constructor(props: any) {
    super(props);
  };

  static defaultProps = {
    btnType: 'syan',
    btnText: '登录',
    color: '#fff',
    btnRadius: 8,
    disabled: false
  };

  // 按钮事件
  private onPressButton = () => {
    if (!this.props.disabled) {
      this.props.onPress && this.props.onPress();
    }
  }

  render() {
    const { btnType, btnRadius, disabled, onPress, color } = this.props;

    let bgColor: string = '';

    switch (btnType) {
      case 'syan':
        bgColor = '#32c1d4';
        break;
      case 'orange':
        bgColor = '#ffbe23';
        break;
      case 'darker':
        bgColor = '#4c4c4c';
        break;
      case 'dark':
        bgColor = '#8f8f94';
        break;
      case 'gray':
        bgColor = '#c7c7cc';
        break;
      case 'light':
        bgColor = '#d9d9d9';
        break;
      case 'lighter':
        bgColor = '#f8f8f8';
        break;
      default:
        bgColor = '#ff5046';
    };

    let Button: JSX.Element = disabled ?
      (
        <TouchableWithoutFeedback>
          <View style={[styles.btn, {
            backgroundColor: '#ccc',
            borderRadius: btnRadius
          }, this.props.btnStyle]}
          >
            <Text style={[styles.btnText, { color: color }]}
            >{this.props.btnText}</Text>
          </View>
        </TouchableWithoutFeedback>
      ) :
      (
        (Platform.OS === 'ios') ?
          (
            <TouchableWithoutFeedback
              onPress={this.onPressButton.bind(this)}>
              <View style={[styles.btn, {
                backgroundColor: bgColor,
                borderRadius: btnRadius
              }, this.props.btnStyle]}
              >
                <Text style={[styles.btnText, { color: color }]}
                >{this.props.children || this.props.btnText}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) :
          (
            <TouchableNativeFeedback
              onPress={this.onPressButton.bind(this)}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.btn, {
                backgroundColor: bgColor,
                borderRadius: btnRadius
              }, this.props.btnStyle]}
              >
                <Text style={[styles.btnText, { color: color }]}
                >{this.props.children || this.props.btnText}</Text>
              </View>
            </TouchableNativeFeedback>
          )
      );

    return (
      <View>
        {Button}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    width: '80%',
    padding: pxToDp(24),
    fontSize: pxToDp(36),
    textAlign: 'center',
    color: '#000',
  },
  disabled: {
    backgroundColor: '#ccc'
  }
});

export default NativeButton;