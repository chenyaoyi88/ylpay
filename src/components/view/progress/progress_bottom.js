"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const shared_1 = require("../../../shared");
const SCREENWIDTH = react_native_1.Dimensions.get('window').width;
const TIPS_WIDTH = shared_1.pxToDp(190);
const ARROW_WIDTH = shared_1.pxToDp(10);
const ARROWPOSITION_LEFT = TIPS_WIDTH * 0.1;
const ARROWPOSITION_CENTER = TIPS_WIDTH * 0.45;
const ARROWPOSITION_RIGHT = TIPS_WIDTH * 0.8;
class ProgressBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { per, show } = this.props;
        let realPercent = 0;
        if (per > 100) {
            realPercent = 100;
        }
        else if (per < 0) {
            realPercent = 0;
        }
        else {
            realPercent = per;
        }
        let percent = SCREENWIDTH * (realPercent / 100);
        let tipsPosition = 0;
        let progressWidth = 0;
        let arrowPosition = 0;
        let arrowType = 0;
        if (realPercent < 50) {
            arrowType = ARROWPOSITION_LEFT;
            arrowPosition = (ARROWPOSITION_LEFT + ARROW_WIDTH);
            tipsPosition = percent < arrowPosition ? 0 : (percent - arrowPosition);
        }
        else if (realPercent === 50) {
            arrowType = ARROWPOSITION_CENTER;
            arrowPosition = (ARROWPOSITION_CENTER + ARROW_WIDTH);
            tipsPosition = percent - arrowPosition;
        }
        else {
            arrowType = ARROWPOSITION_RIGHT;
            arrowPosition = (ARROWPOSITION_RIGHT + ARROW_WIDTH);
            tipsPosition = percent - arrowPosition;
            if (tipsPosition > (SCREENWIDTH - TIPS_WIDTH)) {
                tipsPosition = SCREENWIDTH - TIPS_WIDTH;
            }
        }
        progressWidth = percent < arrowPosition ? arrowPosition : percent;
        return (show &&
            React.createElement(react_native_1.View, { style: [styles.progressWrap] },
                React.createElement(react_native_1.View, { style: [styles.progressTipsWrap, { left: tipsPosition }] },
                    React.createElement(react_native_1.View, { style: [styles.progressTips] },
                        React.createElement(react_native_1.Text, { style: [styles.progressText] },
                            "\u5DF2\u5B8C\u6210\u8FDB\u5EA6",
                            realPercent,
                            "%")),
                    React.createElement(react_native_1.View, { style: [styles.triangle, { left: arrowType }] })),
                React.createElement(react_native_1.View, { style: [styles.progressBar] },
                    React.createElement(react_native_1.View, { style: [styles.progress, { width: progressWidth }] }))));
    }
}
ProgressBottom.defaultProps = {
    per: 0,
    show: true
};
exports.ProgressBottom = ProgressBottom;
const styles = react_native_1.StyleSheet.create({
    progressWrap: {
        position: 'relative',
        width: '100%',
        marginTop: shared_1.pxToDp(-96),
        paddingTop: shared_1.pxToDp(84)
    },
    progressBar: {
        position: 'relative',
        width: '100%',
        height: shared_1.pxToDp(12),
        backgroundColor: '#d9d9d9'
    },
    progress: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundColor: '#32c1d4'
    },
    progressTipsWrap: {
        position: 'absolute',
        bottom: shared_1.pxToDp(38)
    },
    progressTips: {
        width: TIPS_WIDTH,
        height: shared_1.pxToDp(44),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32c1d4',
        borderRadius: shared_1.pxToDp(20)
    },
    progressText: {
        fontSize: shared_1.pxToDp(23),
        color: '#fff'
    },
    triangle: {
        position: 'absolute',
        bottom: shared_1.pxToDp(-15),
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        overflow: 'hidden',
        borderTopWidth: shared_1.pxToDp(16),
        borderRightWidth: ARROW_WIDTH,
        borderLeftWidth: ARROW_WIDTH,
        borderTopColor: '#32c1d4',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    }
});
