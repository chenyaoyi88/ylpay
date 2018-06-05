"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const ICONMAP = [
    { name: 'cancel', url: require('./icons/cancel.png') },
    { name: 'repay_search', url: require('./icons/loan_status-repay_search.png') },
    { name: 'wait_lent', url: require('./icons/loan_status-wait_lent.png') },
    { name: 'repay_back', url: require('./icons/repayment.png') },
    { name: 'repay_warning', url: require('./icons/repayment_overdue.png') },
    { name: 'repay_error', url: require('./icons/reject.png') },
    { name: 'repay_forbid', url: require('./icons/loan_status-repay_forbid.png') },
    { name: 'repay_success', url: require('./icons/repaymented.png') },
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
    { name: 'auth_success', url: require('./icons/auth_success.png') },
    { name: 'auth_unauth', url: require('./icons/auth_unauth.png') },
    { name: 'auth_invalid', url: require('./icons/auth_invalid.png') },
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
    { name: 'emergency_contact', url: require('./icons/emergency_contact.png') },
];
class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.getIconUrl = (name) => {
            for (let item of ICONMAP) {
                if (item.name === name) {
                    return item.url;
                }
            }
            return require('./icons/reject.png');
        };
        this.setDir = (direaction = '0deg') => {
            let dir = [];
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
        };
    }
    render() {
        const { size, name, wrapStyle, iconStyle, dir } = this.props;
        return (React.createElement(react_native_1.View, { style: [{ width: index_1.pxToDp(size), height: index_1.pxToDp(size), marginRight: index_1.pxToDp(10) }, wrapStyle] },
            React.createElement(react_native_1.Image, { style: [{ width: index_1.pxToDp(size), height: index_1.pxToDp(size), transform: this.setDir(dir) }, iconStyle], source: this.getIconUrl(name) })));
    }
}
Icon.defaultProps = {
    size: 32,
    name: 'cancel',
    wrapStyle: {},
    iconStyle: {}
};
const styles = react_native_1.StyleSheet.create({});
exports.default = Icon;
