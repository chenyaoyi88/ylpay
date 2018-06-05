"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  Dimensions,
  Easing,
  Modal
} from 'react-native';

import { pxToDp } from '../../shared';

interface LoadingProps {
  /** 显示隐藏 */
  show?: boolean;
  /** 显示loading文字 */
  text?: string;
  /** 是否可关闭 */
  canClose?: boolean;
}

class Loading extends React.Component<LoadingProps, any> {

  constructor(props: LoadingProps) {
    super(props);
  }

  static defaultProps = {
    show: false,
    text: '',
    canClose: false
  }

  render() {

    const { show, text } = this.props;

    let showText: string = text ? text : '正在加载';
  
    return (
      show &&
      <View style={[styles.wrap]}>
        <View style={[styles.loadingWrap]}>
          <View style={[styles.loadingContent]}>
            <Image style={[styles.loadingImg]} source={require('./loading.png')}></Image>
            <Text style={[styles.loadingText]}>{showText}</Text>
          </View>
        </View>
      </View>
    );
  }

  // 组件插入DOM之前
  componentWillMount() {
    // console.log('Component: 组件插入DOM之前');
    this.setState({
      show: this.props.show,
      canClose: this.props.canClose
    });
  }

  // 隐藏loading
  private handleLoadingHide = () => {
    if (this.props.canClose) {
      this.setState({
        show: false
      });
    }
  }
}

const styles = StyleSheet.create({
  wrap: {
    // flex: 1,
    // height: '100%',
    // marginTop: pxToDp(100),
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingWrap: {
    width: pxToDp(370),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContent: {
    minWidth: pxToDp(250),
    paddingVertical: pxToDp(25),
    paddingHorizontal: pxToDp(44),
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: pxToDp(20)
  },
  loadingImg: {
    width: pxToDp(60),
    height: pxToDp(60),
    marginBottom: pxToDp(20)
  },
  loadingText: {
    lineHeight: 24,
    fontSize: pxToDp(30),
    color: '#fff',
    textAlign: 'center'
  }
});

export default Loading;