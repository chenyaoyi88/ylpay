"use strict";
import * as React from "react";
import {
  StyleSheet,
  TextInput,
  Picker,
  Platform,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { pxToDp } from '../../utils';
import { MARRIGE_LIST, EDUCATION_LIST, RELATIONSHIP_LIST } from './pickerData';
import PickerIOSMK from './picker-ios';

let count: number = 0;

interface MokaPickerProps {
  style?: any;
  /** 已有的默认数据：marrige，education */
  defaultDataType?: any;
  /** 传进来的下拉数据 */
  pickerData: Array<any>;
  /** 默认选中的值。可以是字符串或整数。*/
  selectedValue?: any;
  /** 某一项被选中时执行此回调。调用时带有如下参数：
   * itemValue: 被选中项的value属性
   * itemPosition: 被选中项在picker中的索引位置
   * */
  onValueChange?: (...args: any[]) => any;
  /** ios 点击确定提交 */
  onSubmit?: (...args: any[]) => any;
}

class MokaPicker extends React.Component<MokaPickerProps, any> {

  constructor(props: MokaPickerProps) {
    super(props);
    this.state = {
      curSelectedValue: this.props.selectedValue,
      selectedValue: this.props.selectedValue
    };
  }

  static defaultProps = {
  };

  render() {
    const { style, defaultDataType, selectedValue, pickerData, children, ...other }: any = this.props;

    let dataShow: Array<any> = [];

    if (pickerData) {
      // 如果有传数据进来，就用传进来的数据
      dataShow = pickerData;
    } else {
      // 如果没有传数据进来，就是使用默认的已有数据
      switch (defaultDataType) {
        case 'marrige':
          dataShow = MARRIGE_LIST;
          break;
        case 'education':
          dataShow = EDUCATION_LIST;
          break;
        case 'relationship':
          dataShow = RELATIONSHIP_LIST;
          break;
        default:
          dataShow = [];
      }
    }

    let data: any = dataShow.map((item: { label: string; value: string; }, index: number) => {
      return (
        <Picker.Item key={index} label={item.label} value={item.value} />
      )
    });

    let defaultSelectedValue: string = selectedValue || (dataShow.length && dataShow[0] && dataShow[0].value) || '';

    return (
      (Platform.OS === 'ios') ? (
        <View style={{ flex: 1, height: '100%' }}>
          <TouchableWithoutFeedback onPress={this.onShowPicker}>
            <View style={{ height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text>{this.state.curSelectedValue}</Text>
            </View>
          </TouchableWithoutFeedback>
          <PickerIOSMK
            ref={'picker'}
            valuesName={'value'}
            labelsName={'label'}
            pickerData={pickerData}
            defaultValue={this.state.selectedValue}
            onValueChange={(value: any) => {
              this.setState({
                curSelectedValue: valueFindLabel(this.props.pickerData, value),
              });
              this.props.onValueChange && this.props.onValueChange(value);
            }}
            onSubmit={(value: any) => {
              this.setState({
                curSelectedValue: valueFindLabel(this.props.pickerData, value),
              });
              this.props.onSubmit && this.props.onSubmit(value);
            }}
          />
        </View>
      ) : (
          <Picker
            selectedValue={defaultSelectedValue}
            style={[styles.itemElement, style]}
            {...other}
          >
            {children || data}
          </Picker>
        )
    )
  }

  componentWillReceiveProps(nextPrpos: any) {
    // console.warn(`nextPrpos ${count++}: ` + JSON.stringify(nextPrpos));
    if (nextPrpos.pickerData && nextPrpos.pickerData.length) {
      if (Platform.OS === 'ios') {
        // console.warn('selectedValue: ' + JSON.stringify(this.props.selectedValue));
        this.setState({
          curSelectedValue: valueFindLabel(nextPrpos.pickerData, nextPrpos.selectedValue)
        });
      }
    }
  }

  private onShowPicker = () => {
    // console.warn(this.props.selectedValue);
    this.setState({
      selectedValue: this.props.selectedValue
    });
    Keyboard.dismiss();
    const picker = this.refs.picker as any;
    picker.show();
  }

}


function valueFindLabel(pickerData: Array<any>, value: string): string {
  for (let item of pickerData) {
    if (item.value === value) {
      return item.label || '';
    }
  }
  return '';
}

const styles = StyleSheet.create({
  itemElement: {
    flex: 1,
    height: '100%'
  }
});

export default MokaPicker;