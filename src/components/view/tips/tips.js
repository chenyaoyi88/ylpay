"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const components_1 = require("../../../components");
const shared_1 = require("../../../shared");
class Tips extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { tipsWrapStyle, iconStyle, tipsText, size, text, children } = this.props;
        return (React.createElement(react_native_1.View, { style: [styles.tips, tipsWrapStyle] },
            React.createElement(components_1.Icon, { iconStyle: [iconStyle], size: size, name: 'unauth' }),
            React.createElement(react_native_1.Text, { style: [styles.tipsText, tipsText] }, text || children)));
    }
}
Tips.defaultProps = {
    tipsWrapStyle: {},
    iconStyle: {},
    tipsText: {},
    size: 24,
    text: ''
};
exports.Tips = Tips;
class Wall extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { textDark, textLight, children } = this.props;
        return (React.createElement(react_native_1.View, { style: [styles.wall] },
            React.createElement(react_native_1.Text, { style: [styles.wallTextDark] },
                textDark || this.props.children,
                React.createElement(react_native_1.Text, { style: [styles.wallTextLight] }, textLight))));
    }
}
Wall.defaultProps = {
    textDark: '',
    textLight: '',
    children: ''
};
exports.Wall = Wall;
const styles = react_native_1.StyleSheet.create({
    tips: {
        height: shared_1.pxToDp(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tipsText: {
        fontSize: shared_1.pxToDp(24),
        color: '#ababab'
    },
    wall: {
        width: '100%',
        height: shared_1.pxToDp(98),
        paddingLeft: shared_1.pxToDp(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    wallTextDark: {
        fontSize: shared_1.pxToDp(24),
        color: '#4c4c4c'
    },
    wallTextLight: {
        color: '#8f8f94'
    }
});
