"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { marginTop, marginBottom } = this.props;
        return (React.createElement(react_native_1.View, { style: [styles.logoWrap, {
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }] },
            React.createElement(react_native_1.Image, { style: [styles.logo], source: require('./moka-logo.png') })));
    }
}
Logo.defaultProps = {
    marginTop: 0,
    marginBottom: 0
};
const styles = react_native_1.StyleSheet.create({
    logoWrap: {
        height: 100,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: '100%'
    }
});
exports.default = Logo;
