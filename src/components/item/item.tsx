"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { Icon } from '../icon';
import { pxToDp } from '../utils';

export interface ItemProps {
  /** 左边的大文字 */
  title?: string;
  /** 左边的描述 */
  des?: string;
  /** 右边的文字 */
  statusText?: string | number;
  /** 右边的状态 */
  status?: boolean;
  /** 右边文字的颜色 */
  statusColor?: string;
  /** 是否显示底边 */
  bottomLine?: boolean;
  /** 点击事件 */
  onPress?(...args: any[]): void;
  /** list高度 */
  height?: number;
  /** 显示距离 */
  showDistance?: boolean;
  /** icon样式 */
  iconStyle?: any;
  /** 是否显示icon */
  showIcon?: any;
  /** icoUrl */
  iconUrl?: any;
  /** icon大小 */
  iconSize?: any;
  /** title的style */
  titleStyle?: any;
  /** des的style */
  desStyle?: any;
  /** statusText的style */
  statusTextStyle?: any;
  /** 左右宽度比例为2：1 */
  leftMoreRight?: boolean;
  /** 左右宽度比例为1：2 */
  rightMoreLeft?: boolean;
}

class Item extends React.Component<ItemProps, any> {

  constructor(props: ItemProps) {
    super(props);
  }

  static defaultProps = {
    title: '',
    des: '',
    statusText: '',
    status: false,
    bottomLine: true,
    showDistance: false,
    showIcon: '',
    iconUrl: '',
    iconSize: 40,
    notice: false,
    titleStyle: {},
    desStyle: {},
    statusTextStyle: {},
    leftMoreRight: false,
    rightMoreLeft: false
  }

  render() {

    const {
      title,
      des,
      statusText,
      status,
      bottomLine,
      height,
      showDistance,
      showIcon,
      iconUrl,
      iconSize,
      iconStyle,
      statusColor,
      titleStyle,
      desStyle,
      statusTextStyle,
      leftMoreRight,
      rightMoreLeft
    } = this.props;

    /** 
     * 右边文字的颜色设置，
     * 如果设置了颜色，就用设置的颜色，
     * 没设置，则用默认色（成功：#8f8f94,失败 #ff5046） 
     */
    let statusTextColor: string = '';
    if (statusColor) {
      statusTextColor = statusColor;
    } else {
      statusTextColor = status ? '#8f8f94' : '#ff5046';
    }

    const textDes: any = des ? <Text style={[Itemtyles.des, desStyle]}>{des}</Text> : null;

    const lmLeft: any = leftMoreRight ? Itemtyles.moreFlex : '';
    const rmLeft: any = rightMoreLeft ? Itemtyles.moreFlex : '';

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.onButtonPress}>
        <View style={[Itemtyles.wrap, { height: height ? pxToDp(height) : pxToDp(98), marginBottom: showDistance ? pxToDp(20) : 0 }]}>
          {
            showIcon ? <View style={[Itemtyles.wrapIcon]}>
              <Icon wrapStyle={[Itemtyles.icon, iconStyle]} size={iconSize} name={showIcon}></Icon>
            </View> : null
          }
          <View style={[Itemtyles.wrapContent, { borderBottomWidth: bottomLine ? pxToDp(1) : 0 }]}>
            <View style={[Itemtyles.content, Itemtyles.contentTitleWrap, lmLeft]}>
              <Text style={[Itemtyles.title, titleStyle]}>{title}</Text>
              {textDes}
            </View>
            <View style={[Itemtyles.content, rmLeft]}>
              <View style={[Itemtyles.contentLeft]}>
                <Text style={[Itemtyles.status, { color: statusTextColor }, statusTextStyle]}>{statusText}</Text>
              </View>
              <Icon wrapStyle={[Itemtyles.contentRight]} size={26} name="arrow" dir="right"></Icon>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }

  /**
   * @description 列表点击事件
   */
  private onButtonPress = () => {
    this.props.onPress && this.props.onPress();
  }

}

const Itemtyles = StyleSheet.create({
  wrap: {
    height: pxToDp(98),
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  wrapIcon: {
    width: pxToDp(70),
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 0
  },
  wrapContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToDp(30),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#d9d9d9'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentTitleWrap: {
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  title: {
    fontSize: pxToDp(30),
    color: '#4c4c4c'
  },
  des: {
    fontSize: pxToDp(24),
    color: '#8f8f94'
  },
  status: {
    marginRight: pxToDp(14),
    fontSize: pxToDp(24),
    color: '#4c4c4c'
  },
  contentLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  contentRight: {
    width: pxToDp(40)
  },
  success: {
    color: '#ff5046'
  },
  moreFlex: {
    flex: 2
  }
});

export { Item };