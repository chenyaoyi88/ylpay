"use strict";
import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  Button
} from 'react-native';

import { pxToDp } from '../../../utils';

interface VcodeProps {
  ViewStyle?: any;
  labelStyle?: any;
  disabled?: boolean;
  time: number;
  cutDown?: boolean;
  content?: string;
  sending?: boolean;
  onRequestClose?: () => void;
  onClick: (...args: any[]) => void;
}

class VcodeButton extends React.Component<VcodeProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      disabled: props.disabled,
      content: props.content,
      sending: props.sending,
      cutDown: props.cutDown
    };

    this.handleClick = this.handleClick.bind(this);
  };

  static defaultProps = {
    disabled: false,
    time: 60,
    sending: false,
    content: '获取验证码',
    cutDown: false,
  };

  // 定义定时器函数
  private countFunc: any = null;

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.sending && nextProps.sending !== this.state.sending) {
      this.setState({
        sending: false,
        disabled: true,
      });
      // 启动倒计时
      this.countDown(this.props.time);
    }
  }

  /**
   * @description 页面跳转是阻止计时器运作，避免造成内存泄漏
   */
  componentWillUnmount() {
    clearInterval(this.countFunc);
  }

  handleClick() {
    this.props.onClick();
  }

  // 倒计时
  countDown(time: number) {
    clearInterval(this.countFunc);
    this.countFunc = setInterval(() => {
      // 判断计时器是否立即停止
      if (this.props.cutDown && this.props.onRequestClose) {
        clearInterval(this.countFunc);
        this.setState({
          count: '获取验证码',
          sending: false,
          disabled: false,
        });
        this.props.onRequestClose();
        return;
      }
      // 判断时间是否为0
      if (time === 0 && this.props.onRequestClose) {
        clearInterval(this.countFunc);
        this.setState({
          content: '获取验证码',
          sending: false,
          disabled: false
        });
        this.props.onRequestClose();
      } else {
        time -= 1;
        this.setState({
          sending: true,
          content: `${time}s`,
        });
      }
    }, 1000);
  }

  render() {

    const { ViewStyle, labelStyle, time } = this.props;
    const { disabled, content } = this.state;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        onPress={this.handleClick}
      >
        <View style={[styles.vCodeWrap, ViewStyle]}>
          <Text style={[styles.vCodeText, labelStyle]}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  vCodeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vCodeText: {
    color: '#32c1d4'
  }
});

export default VcodeButton;