"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ToastAndroid,
  Dimensions,
  Platform,
  Modal
} from 'react-native';

import { pxToDp } from '../index';

const SCREEN_WIDTH: number = Dimensions.get('window').width;
const SCREEN_HEIGHT: number = Dimensions.get('window').height;

interface ToastProps {
  open?: boolean;
  duration?: number;
  message?: string;
  onRequestClose?: (...args: any[]) => void;
}

class Toast extends React.Component<ToastProps, any> {

  state = {
    open: false,
    message: '',
    showBg: false
  };

  static defaultProps: Partial<ToastProps> = {
    open: false,
    message: '',
    duration: 1000,
  };

  // 定义一个方法，用于componentWillUnmount时clearTimeout
  private toastFunc: any = null;

  /** toast message */
  private toastMessage: string = '';

  // 组件插入DOM之前
  componentWillMount() {
    // console.log('Component: 组件插入DOM之前');
    if (this.props.open && this.props.message) {
      this.setState({
        open: this.props.open,
        message: this.props.message
      });
      if (Platform.OS !== 'ios') {
        ToastAndroid.show(this.props.message, ToastAndroid.SHORT);
      }
    }
  }

  // 已加载组件收到新的参数时调用
  componentWillReceiveProps(nextProps) {
    // console.log(`Component: 已加载组件收到新的参数，open: ${nextProps.open}`);
    if (nextProps.open) {
      this.toastMessage = nextProps.message;
      this.autoClose();
    } else {
      this.toastMessage = '';
      this.setState({
        open: false
      });
    }
  }

  // 组件插入DOM后
  componentDidMount() {
    // console.log('Component: 组件插入DOM后');
    if (this.props.open && this.props.message) {
      this.autoClose();
    } else {
      this.setState({
        open: false
      });
      this.toastMessage = '';
    }
  }

  /** 自动关闭 */
  private autoClose = () => {
    this.setState({
      open: true
    });
    clearTimeout(this.toastFunc);
    this.toastFunc = setTimeout(() => {
      this.props.onRequestClose();
    }, this.props.duration);

    if (Platform.OS !== 'ios') {
      ToastAndroid.show(this.toastMessage, ToastAndroid.SHORT);
    }
  }

  // 清理setTimeout
  componentWillUnmount() {
    clearTimeout(this.toastFunc);
  }

  render() {

    const { message } = this.props;
    const { open } = this.state;

    return (
      (Platform.OS === 'ios') ? (
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={open}
        >
          <View style={[styles.dialogWrap]}>
            <View style={[styles.textWrap]}>
              <Text style={[styles.text]}>{message}</Text>
            </View>
          </View>
        </Modal>
      ) : (
      open && <View style={[styles.dialogWrap]}></View>
      )
    );
  }
}


const styles = StyleSheet.create({
  dialogWrap: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0)',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textWrap: {
    marginBottom: pxToDp(200),
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: pxToDp(30)
  },
  text: {
    color: '#fff',
    padding: pxToDp(20)
  }
});

export default Toast;