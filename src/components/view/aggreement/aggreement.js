"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const index_1 = require("../../index");
class Aggreement extends React.Component {
    constructor(props) {
        super(props);
        this.isSelected = true;
        this.textClick = () => {
            this.props.textOnPress && this.props.textOnPress();
            this.setState({
                isSelected: this.isSelected = !this.isSelected
            });
            this.props.onSelected && this.props.onSelected(this.isSelected);
        };
        this.titleClick = () => {
            this.props.titleOnPress && this.props.titleOnPress();
        };
        this.state = {
            isSelected: true
        };
    }
    componentWillMount() {
        this.setState({
            isSelected: this.isSelected = this.props.isSelected
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isSelected: this.isSelected = nextProps.isSelected
        });
        this.props.onSelected && this.props.onSelected(this.isSelected);
    }
    render() {
        const { tips, title, iconSize, fontSize, wrapStyle, iconStyle, textStyle, textTitleStyle, isSelected, textOnPress, titleOnPress } = this.props;
        let iconElement = this.state.isSelected ? React.createElement(react_native_1.Image, { style: [styles.agreementIcon, {
                    width: index_1.pxToDp(iconSize + 1),
                    height: index_1.pxToDp(iconSize + 1)
                }], source: require('./success.png') }) : React.createElement(react_native_1.View, { style: [styles.agreementIcon, iconStyle, {
                    width: index_1.pxToDp(iconSize),
                    height: index_1.pxToDp(iconSize),
                    borderRadius: index_1.pxToDp(iconSize) / 2,
                    borderWidth: 1,
                    borderColor: '#32c1d4'
                }
            ] });
        return (React.createElement(react_native_1.View, { style: [styles.agreementWrap, wrapStyle] },
            React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, onPress: this.textClick },
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
                    iconElement,
                    React.createElement(react_native_1.Text, { style: [styles.agreementText, textStyle, { fontSize: index_1.pxToDp(fontSize) }] }, tips))),
            React.createElement(react_native_1.Text, { style: [styles.agreementName, textTitleStyle, { fontSize: index_1.pxToDp(fontSize) }], onPress: this.titleClick }, title)));
    }
}
Aggreement.defaultProps = {
    tips: '"xxx"代表你已同意',
    title: '《xxx服务协议》',
    iconSize: 24,
    fontSize: 26,
    wrapStyle: {},
    iconStyle: {},
    textStyle: {},
    isSelected: true,
    textTitleStyle: {},
    textOnPress: () => { },
    titleOnPress: () => { }
};
const styles = react_native_1.StyleSheet.create({
    agreementWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    agreementIcon: {
        marginRight: index_1.pxToDp(10)
    },
    agreementText: {
        fontSize: index_1.pxToDp(26),
        color: '#8f8f94'
    },
    agreementName: {
        marginLeft: index_1.pxToDp(8),
        color: '#32c1d4'
    }
});
exports.default = Aggreement;
