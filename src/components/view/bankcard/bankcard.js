"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const index_2 = require("../../index");
const bankcode_1 = require("./bankcode");
class BankCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { code, bankName, cardType, cardNoSuf } = this.props;
        let bankCardOptions = bankcode_1.bankCode(code);
        return (React.createElement(react_native_1.View, { style: [styles.bankCardWrap] },
            React.createElement(index_2.SvgLinearGradient, { width: '100%', height: index_1.pxToDp(200), id: bankCardOptions.code, start: bankCardOptions.startColor, end: bankCardOptions.endColor, dir: 'lr', borderRadius: '20' }),
            React.createElement(react_native_1.View, { style: [styles.bankCardContent] },
                React.createElement(react_native_1.View, { style: [styles.bankCardUp] },
                    React.createElement(react_native_1.View, { style: [styles.upLeft] },
                        React.createElement(react_native_1.View, { style: [styles.upLeftImgWrap] },
                            React.createElement(react_native_1.Image, { style: [styles.upLeftImg], source: bankCardOptions.icon })),
                        React.createElement(react_native_1.View, { style: [styles.upLeftText] },
                            React.createElement(react_native_1.Text, { style: [styles.upLeftTextTitle] }, bankName),
                            React.createElement(react_native_1.Text, { style: [styles.upLeftTextDes] }, cardType))),
                    React.createElement(react_native_1.View, { style: [styles.upRight] },
                        React.createElement(react_native_1.Image, { style: [styles.upRightIcon], source: require('./bankicon/yl.png') }))),
                React.createElement(react_native_1.View, { style: [styles.bankCardDown] },
                    React.createElement(react_native_1.Text, { style: [styles.backCardNumStar] },
                        "**** **** ****",
                        React.createElement(react_native_1.Text, { style: [styles.backCardNum] },
                            " ",
                            cardNoSuf))))));
    }
}
BankCard.defaultProps = {
    code: 'UNKNOW',
    bankName: '--',
    cardType: '--卡',
    cardNoSuf: '----',
};
const styles = react_native_1.StyleSheet.create({
    bankCardWrap: {
        width: '100%',
        height: index_1.pxToDp(200),
        position: 'relative',
    },
    bankCardContent: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    bankCardUp: {
        flex: 1,
        flexDirection: 'row',
    },
    bankCardDown: {
        flex: 1,
    },
    upLeft: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: index_1.pxToDp(20),
        paddingVertical: index_1.pxToDp(16)
    },
    upLeftImgWrap: {
        width: index_1.pxToDp(90),
        height: index_1.pxToDp(90),
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: index_1.pxToDp(45)
    },
    upLeftImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    upLeftText: {
        flexDirection: 'column',
        marginLeft: index_1.pxToDp(10),
        marginTop: index_1.pxToDp(5)
    },
    upLeftTextTitle: {
        fontSize: index_1.pxToDp(30),
        color: '#fff',
        backgroundColor: 'transparent'
    },
    upLeftTextDes: {
        marginTop: index_1.pxToDp(5),
        fontSize: index_1.pxToDp(24),
        color: '#fff',
        backgroundColor: 'transparent'
    },
    upRight: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: index_1.pxToDp(15),
        marginRight: index_1.pxToDp(30)
    },
    upRightIcon: {
        width: index_1.pxToDp(74),
        height: index_1.pxToDp(74),
        opacity: 0.5
    },
    backCardNumStar: {
        marginTop: index_1.pxToDp(10),
        marginRight: index_1.pxToDp(30),
        fontSize: index_1.pxToDp(50),
        color: '#fff',
        textAlign: 'right',
        backgroundColor: 'transparent'
    },
    backCardNum: {
        fontSize: index_1.pxToDp(52),
    },
    btnWrap: {
        height: index_1.pxToDp(98),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32c1d4'
    },
    icon: {},
    btnText: {
        fontSize: index_1.pxToDp(36),
        color: '#fff'
    },
});
exports.default = BankCard;
