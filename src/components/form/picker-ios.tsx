"use strict";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  PickerIOS,
  Picker,
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { pxToDp } from '../../utils';

const PickerItemIOS = PickerIOS.Item;
const SCREEN_WIDTH = Dimensions.get('window').width;

interface PickerIOSMKProps {
  /** 数据集 */
  pickerData: Array<any>;
  /** 按钮颜色 */
  buttonColor?: string,
  /** pickerData对应的value字符 */
  valuesName: string,
  /** pickerData对应的label字符 */
  labelsName: string,
  /** 确定按钮的文字 */
  confirmText?: string,
  /** 取消按钮的文字 */
  cancelText?: string,
  /** 中间描述的文字 */
  desText?: string,
  /** pickerIOS组件的样式 */
  itemStyle?: any,
  /** 默认值 */
  defaultValue: string;
  /** 确定按钮事件 */
  onSubmit: (selectedValue: any) => any,
  /** 选择改变事件 */
  onValueChange: (selectedValue: any) => any;
}

interface pickerData {
  value: string;
  label: string;
}

class PickerIOSMK extends React.Component<PickerIOSMKProps, any> {

  constructor(props: PickerIOSMKProps) {
    super(props);

    this.state = {
      buttonColor: this.props.buttonColor || '#007AFF',
      modalVisible: false,
      selectedValue: this.props.defaultValue,
    };
  }

  static defaultProps = {
    valuesName: 'value',
    labelsName: 'label',
    pickerData: []
  };

  render() {
    const { buttonColor } = this.state;
    const itemStyle = this.props.itemStyle || {};
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.state.modalVisible}
      >
        <TouchableWithoutFeedback onPress={this.hide}>
          <View style={styles.basicContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.buttonView}>
                <View style={[styles.btnCommon, styles.btnLeftWrap]}>
                  <TouchableWithoutFeedback onPress={() => this.onPressCancel()}>
                    <View style={[styles.btnTouchAreaCommon, styles.btnTouchAreaLeft]}>
                      <Text style={[styles.btnTextCommon, { color: buttonColor }]}>
                        {this.props.cancelText || '取消'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View style={[styles.btnCommon, styles.btnCenterWrap]}>
                  <Text style={{ color: buttonColor }}>中间的文字</Text>
                </View>
                <View style={[styles.btnCommon, styles.btnRightWrap]}>
                  <TouchableWithoutFeedback onPress={() => this.onPressSubmit()}>
                    <View style={[styles.btnTouchAreaCommon, styles.btnTouchAreaRight]}>
                      <Text style={[styles.btnTextCommon, { color: buttonColor }]}>
                        {this.props.confirmText || '确定'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

              </View>

              <View style={styles.mainBox}>
                <PickerIOS
                  ref={'picker'}
                  style={styles.bottomPicker}
                  selectedValue={this.state.selectedValue}
                  onValueChange={(value: any) => this.onValueChange(value)}
                  itemStyle={[styles.pickerItem, itemStyle]}
                >
                  {
                    this.props.pickerData && this.props.pickerData.map((item: pickerData, index: number) => this.renderItem(item, index))
                  }
                </PickerIOS>
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  componentWillMount() {
    /** 如果有初始值，就设置一下 */
    if (this.props.defaultValue) {
      this.setSelectedValue(this.props.defaultValue);
    }
  }

  componentWillReceiveProps(nextProps: any) {
    // console.warn('componentWillReceiveProps' + JSON.stringify(props));

    if ( nextProps.pickerData.length > 0 && (nextProps.defaultValue !== this.props.defaultValue)) {
      this.setState({
        selectedValue: nextProps.defaultValue
      });
    }
  }

  private onPressCancel = () => {
    this.setState({
      modalVisible: false,
    });
  }

  private onPressSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.selectedValue);
    }

    this.setState({
      modalVisible: false,
    });
  }

  /** 显示下拉组件 */
  private show = () => {
    this.setState({
      modalVisible: true,
    });
  }

  /** 隐藏下拉组件 */
  private hide = () => {
    this.setState({
      modalVisible: false,
    });
  }

  private renderItem = (item: any, index: number) => {
    const label: string = item[this.props.labelsName];
    const value: string = item[this.props.valuesName];
    return (
      <PickerItemIOS
        key={value}
        value={value}
        label={label}
      />
    );
  }

  private onValueChange(value: string) {
    this.setSelectedValue(value);
  }

  private setSelectedValue(value: string) {
    for (let item of this.props.pickerData) {
      if (item[this.props.valuesName] === value) {
        this.setState({
          selectedValue: value,
        });
        this.props.onValueChange && this.props.onValueChange(value);
      }
    }
  }

}


const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },

  buttonView: {
    width: SCREEN_WIDTH,
    height: pxToDp(80),
    borderTopWidth: pxToDp(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  btnCommon: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  btnLeftWrap: {
    alignItems: 'flex-start',
  },
  btnCenterWrap: {
    alignItems: 'center',
  },
  btnRightWrap: {
    alignItems: 'flex-end'
  },

  bottomPicker: {
    width: SCREEN_WIDTH,
  },
  pickerItem: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mainBox: {},
  btnTextCommon: {
  },
  btnTouchAreaCommon: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: pxToDp(30)
  },
  btnTouchAreaLeft: {
    alignItems: 'flex-start'
  },
  btnTouchAreaRight: {
    alignItems: 'flex-end'
  }
});

export default PickerIOSMK;