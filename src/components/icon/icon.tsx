"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import { pxToDp } from '../utils';

const ICONMAP: any = [
  { name: 'cancel', url: require('./icons/cancel.png') },

  { name: 'repay_search', url: require('./icons/loan_status-repay_search.png') },//审核中
  { name: 'wait_lent', url: require('./icons/loan_status-wait_lent.png') },//放款中
  { name: 'repay_back', url: require('./icons/repayment.png') },//待还款
  { name: 'repay_warning', url: require('./icons/repayment_overdue.png') },//逾期
  { name: 'repay_error', url: require('./icons/reject.png') },//已拒绝
  { name: 'repay_forbid', url: require('./icons/loan_status-repay_forbid.png') },//已取消
  { name: 'repay_success', url: require('./icons/repaymented.png') },//已还款

  { name: 'pay_error', url: require('./icons/pay_error.png') },
  { name: 'pay_success', url: require('./icons/pay_success.png') },
  { name: 'pay_success_samll', url: require('./icons/pay_success_samll.png') },
  { name: 'pay_failed_samll', url: require('./icons/pay_failed_samll.png') },
  { name: 'success', url: require('./icons/success.png') },
  { name: 'reject', url: require('./icons/reject.png') },
  { name: 'repayment', url: require('./icons/repayment.png') },
  { name: 'repayment_overdue', url: require('./icons/repayment_overdue.png') },
  { name: 'repaymented', url: require('./icons/repaymented.png') },
  { name: 'arrow', url: require('./icons/arrow.png') },
  { name: 'unauth', url: require('./icons/unauth.png') },
  { name: 'question', url: require('./icons/question.png') },
  { name: 'add', url: require('./icons/add.png') },
  { name: 'error', url: require('./icons/error.png') },

  // 已认证、未认证、已失效
  { name: 'auth_success', url: require('./icons/auth_success.png') },
  { name: 'auth_unauth', url: require('./icons/auth_unauth.png') },
  { name: 'auth_invalid', url: require('./icons/auth_invalid.png') },

  // 个人中心
  { name: 'personal_center', url: require('./icons/personal_center.png') },

  { name: 'personal_center_loan_record', url: require('./icons/personal_center_loan_record.png') },
  { name: 'personal_center_auth', url: require('./icons/personal_center_auth.png') },
  { name: 'personal_center_bankcard', url: require('./icons/personal_center_bankcard.png') },
  { name: 'personal_center_basic_info', url: require('./icons/personal_center_basic_info.png') },
  { name: 'personal_center_coupon', url: require('./icons/personal_center_coupon.png') },
  { name: 'personal_center_help', url: require('./icons/personal_center_help.png') },
  { name: 'personal_center_message', url: require('./icons/personal_center_message.png') },
  { name: 'personal_center_setting', url: require('./icons/personal_center_setting.png') },

  { name: 'settings_about_us', url: require('./icons/about_us.png') },
  { name: 'settings_safety', url: require('./icons/safety.png') },
  // 紧急联系人
  { name: 'emergency_contact', url: require('./icons/emergency_contact.png') },
];

interface IconProps {
  size?: number;
  name: string;
  wrapStyle?: any;
  iconStyle?: any;
  dir?: string;
}

class Icon extends React.Component<IconProps, any> {

  constructor(props: IconProps) {
    super(props);
  }

  static defaultProps = {
    size: 32,
    name: 'cancel',
    wrapStyle: {},
    iconStyle: {}
  }

  private getIconUrl = (name: string) => {
    for (let item of ICONMAP) {
      if (item.name === name) {
        return item.url;
      }
    }
    return require('./icons/reject.png');
  }

  private setDir = (direaction: string = '0deg') => {
    let dir: any = [];
    switch (direaction) {
      case 'top':
        dir = [{ rotate: '0deg' }];
        break;
      case 'right':
        dir = [{ rotate: '90deg' }];
        break;
      case 'bottom':
        dir = [{ rotate: '180deg' }];
        break;
      case 'left':
        dir = [{ rotate: '270deg' }];
        break;
      default:
        dir = [{ rotate: direaction }];
    }
    return dir;
  }

  render() {

    const { size, name, wrapStyle, iconStyle, dir } = this.props;

    return (
      <View style={[{ width: pxToDp(size), height: pxToDp(size), marginRight: pxToDp(10) }, wrapStyle]}>
        <Image style={[{ width: pxToDp(size), height: pxToDp(size), transform: this.setDir(dir) }, iconStyle]} source={this.getIconUrl(name)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default Icon;