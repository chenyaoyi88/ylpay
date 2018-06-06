"use strict";
import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProperties
} from 'react-native';

import { pxToDp } from '../../utils';

interface InputPorps {
  style?: any;
  // 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false。
  secureTextEntry?: boolean;
  // 是否要自动将特定字符切换为大写 
  // 'none', 'sentences', 'words', 'characters'
  autoCapitalize?: string;
  // 如果为false，会关闭拼写自动修正。默认值是true
  autoCorrect?: boolean;
  // 如果为true，在componentDidMount后会获得焦点。默认值为false
  autoFocus?: boolean;
  // 如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。
  blurOnSubmit?: boolean;
  // 如果为true，则隐藏光标。默认值为false
  caretHidden?: boolean;
  // 提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。
  defaultValue?: string;
  // 如果为false，文本框是不可编辑的。默认值为true。
  // 值
  value?: string;
  editable?: boolean;
  // 决定弹出的何种软键盘
  // default（默认）
  // numeric（纯数字键盘）
  // email-address（邮件）
  keyboardType?: string;
  // 限制文本框中最多的字符数
  maxLength?: number;
  // 如果为true，文本框中可以输入多行文字。默认值为false。
  multiline?: boolean;
  placeholder?: string;
  placeholderTextColor?: any;

  onBlur?: () => any;
  onFocus?: () => any;
  onChange?: () => any;
  // 当文本框内容变化时调用，改变后的文字内容会作为参数传递
  onChangeText?: (...args: any[]) => any;
  // 当文本输入结束后调用此回调函数
  onEndEditing?: () => any;
  // 长按选择文本时，选择范围变化时调用此函数
  onSelectionChange?: () => any;
  // 此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用
  onSubmitEditing?: () => any;
}

class Input extends React.Component<InputPorps, any> {

  constructor(props: any) {
    super(props);
  }

  static defaultProps = {
  };

  render() {
    const { style, placeholder, ...other }: any = this.props;
    return (
      <TextInput
        style={[styles.itemElement, styles.itemInput, style]}
        placeholder={placeholder}
        placeholderTextColor="#c7c7cc"
        underlineColorAndroid="transparent"
        {...other}
      />
    )
  }
}

const styles = StyleSheet.create({
  itemWrap: {
    flexDirection: 'column',
    paddingLeft: pxToDp(30),
    backgroundColor: '#fff'
  },
  item: {
    height: pxToDp(98),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#d9d9d9'
  },
  itemLabel: {
    width: pxToDp(190),
    fontSize: pxToDp(30),
    color: '#4c4c4c'
  },
  itemElement: {
    flex: 1,
    height: '100%'
  },
  itemInput: {
    fontSize: pxToDp(30)
  },
  itemPicker: {
  }
});

export default Input;