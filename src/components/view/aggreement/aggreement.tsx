"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { pxToDp } from '../../index';

interface AggreementProps {
  // 协议提示文字
  tips?: string;
  // 协议标题
  title?: string;
  // 协议icon大小
  iconSize?: number;
  // 文字大小
  fontSize?: number;
  // 协议组件容器样式
  wrapStyle?: any;
  // 协议icon容器样式
  iconStyle?: any;
  // 协议文字容器样式
  textStyle?: any;
  // 协议标题容器样式
  textTitleStyle?: any;
  // 协议容器点击事件
  textOnPress?: () => void;
  // 协议标题容器点击事件
  titleOnPress?: () => void;
  // 抛出去的函数
  onSelected?: Function;
  // 是否选中
  isSelected?: boolean;
}

class Aggreement extends React.Component<AggreementProps, any> {

  constructor(props: AggreementProps) {
    super(props);
    this.state = {
      isSelected: true
    };
  }

  static defaultProps = {
    tips: '"xxx"代表你已同意',
    title: '《xxx服务协议》',
    iconSize: 24,
    fontSize: 26,
    wrapStyle: {},
    iconStyle: {},
    textStyle: {},
    isSelected: true,
    textTitleStyle: {},
    textOnPress: () => {},
    titleOnPress: () => {}
  }

  // 是否选中
  private isSelected: boolean = true;

  componentWillMount() {
    this.setState({
      isSelected: this.isSelected = this.props.isSelected
    });
  }

  componentWillReceiveProps(nextProps: AggreementProps) {
    this.setState({
      isSelected: this.isSelected = nextProps.isSelected
    });
    this.props.onSelected && this.props.onSelected(this.isSelected);
  }

  // 点击协议文字
  private textClick = () => {
    this.props.textOnPress && this.props.textOnPress();
    this.setState({
      isSelected: this.isSelected = !this.isSelected
    });
    this.props.onSelected && this.props.onSelected(this.isSelected);
  }

  // 点击协议标题
  private titleClick = () => {
    this.props.titleOnPress && this.props.titleOnPress();
  }

  render(): JSX.Element {
    const { 
      tips, 
      title, 
      iconSize,
      fontSize,
      wrapStyle,
      iconStyle,
      textStyle,
      textTitleStyle,
      isSelected,
      textOnPress,
      titleOnPress
    } = this.props;

    let iconElement: JSX.Element = this.state.isSelected ? <Image style={[styles.agreementIcon,{
          width: pxToDp(iconSize + 1), 
          height: pxToDp(iconSize + 1)
        }]} source={require('./success.png')}></Image> : <View style={[styles.agreementIcon, iconStyle, {
          width: pxToDp(iconSize), 
          height: pxToDp(iconSize), 
          borderRadius: pxToDp(iconSize)/2,
          borderWidth: 1,
          borderColor: '#32c1d4'}
          ]}></View>;

    return (
      <View style={[styles.agreementWrap, wrapStyle]}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.textClick}>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
            {iconElement}
            <Text style={[styles.agreementText, textStyle, {fontSize: pxToDp(fontSize)}]} >{tips}</Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.agreementName, textTitleStyle, {fontSize: pxToDp(fontSize)}]} onPress={this.titleClick}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  agreementWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  agreementIcon: {
    marginRight: pxToDp(10)
  },
  agreementText: {
    fontSize: pxToDp(26),
    color: '#8f8f94'
  },
  agreementName: {
    marginLeft: pxToDp(8),
    color: '#32c1d4'
  }
});

export default Aggreement;