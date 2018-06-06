"use strict";
import * as React from "react";
import { 
  StyleSheet, 
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Icon } from '../../components';
import { pxToDp } from '../../utils';

interface RadioProps {
  /** 单选的View样式 */
  style?: any;
  /** 单选的数据 */
  data: Array<any>;
  /** 默认选中 */
  defaultSelected?: string;
  /** 单选项的label */
  label: string;
  /** 单选项的value */
  value: string;
  /** 选中值之后的回调 */
  onSelected?: (...args: any[]) => any;
}

interface RadioState {
  radioData: Array<any>;
  curSelected?: string;
}

class Radio extends React.Component<RadioProps, RadioState> {

    constructor(props: RadioProps) {
      super(props);
      this.state = {
        radioData: this.props.data,
        curSelected: ''
      };
    }
    
    static defaultProps: any = {
      data: [],
      defaultSelected: '',
      label: 'label',
      value: 'value'
    };  

    /** 临时保存数据的数组 */
    private dataList: Array<any> = [];

    /**
     * @description 点击单选项事件
     * @param {string} selectedValue - 选中的单选项的值 
     */
    private onSelect = (selectedValue: string) => {

      const { value } = this.props;

      if (this.state.curSelected === selectedValue) {
        /** 如果点击的单选项的值和当前选中的值一样 */
        this.props.onSelected && this.props.onSelected(this.state.curSelected);
      } else {
        /** 如果点击的单选项的值和当前选中的值不一样 */
        for (let i = 0; i < this.dataList.length; i++ ) {
          this.dataList[i].selected = false;
          if (this.dataList[i][value] === selectedValue) {
            this.dataList[i].selected = true;
          }
        }
        this.setState({
          radioData: this.dataList,
          curSelected: selectedValue
        }, () => {
          this.props.onSelected && this.props.onSelected(this.state.curSelected);
        });
      }
    }

    componentWillMount() {

      const { data, defaultSelected, value } = this.props;

      /** 用于操作的单选列表 */
      let dataList: Array<any> = [];
      /** 当前选中 */
      let curSelected: string = '';

      if (data.length) {
        for (let item of data) {
          let json: any = item;
          json.selected = false;
          dataList.push(json);
        }

        /** 如果有设置默认选中 */
        if (defaultSelected) {
          for (let item of dataList) {
            if (item[value] === defaultSelected) {
              curSelected = defaultSelected;
            }
          }
        } else {
          /** 没有色环之默认选中，默认自动选择第一个 */
          curSelected = dataList[0][value];
        }

        /** 设置好渲染的单选列表 */
        this.dataList = dataList;

        this.setState({
          radioData: dataList,
          curSelected: curSelected
        });
        
        this.props.onSelected && this.props.onSelected(curSelected);

      }
    }

    render() {

      const { style, data, label, value } = this.props;

      let radioList: any = this.state.radioData.map((item: any, index: number) => {
        return (
          <View style={[styles.radioItem]} key={item[value]}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.onSelect.bind(this, item[value])}>
              <View style={[styles.radioWrap]}>
                { item[value] === this.state.curSelected ? <Icon size={45} name="success"></Icon> : <View style={[styles.labelIcon]}></View> }
                <Text style={[styles.radioLabel]}>{item[label]}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      });


      return (
        data.length &&
        <View style={[styles.radio, style]}>
          {radioList}
        </View>
      )
    }
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  radioItem: {
    flex: 1
  },
  radioWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelIcon: {
    width: pxToDp(45),
    height: pxToDp(45),
    marginRight: pxToDp(10),
    borderWidth: pxToDp(2),
    borderColor: '#d9d9d9',
    borderRadius: pxToDp(45)/2
  },
  radioLabel: {
    marginLeft: pxToDp(10),
    fontSize: pxToDp(36),
    color: '#4c4c4c'
  },
});

export default Radio;