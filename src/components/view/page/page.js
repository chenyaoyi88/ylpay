"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container, { backgroundColor: this.props.bgColor }] }, this.props.children));
    }
}
Page.defaultProps = {
    bgColor: '#f8f8f8'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    }
});
exports.default = Page;
