"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

// 布局单位px转为dp
import { pxToDp } from '../../../shared';

// 获取手机屏幕的宽度
const SCREENWIDTH: number = Dimensions.get('window').width;
// 提示泡泡的宽度
const TIPS_WIDTH: number = pxToDp(190);
// 三角形箭头的宽度
const ARROW_WIDTH: number = pxToDp(10);
// 三角形箭头的位置 - 左,中,右
const ARROWPOSITION_LEFT: number = TIPS_WIDTH * 0.1;
const ARROWPOSITION_CENTER: number = TIPS_WIDTH * 0.45;
const ARROWPOSITION_RIGHT: number = TIPS_WIDTH * 0.8;

interface ProgressBottomProps {
  // 完成的百分比 0-100
  per?: number;
  // 是否显示（虚拟键盘弹起时候需要隐藏，否则会贴着虚拟键盘一起往上顶）
  show?: boolean;
}

class ProgressBottom extends React.Component<ProgressBottomProps, null> {

  constructor(props: ProgressBottomProps) {
    super(props);
  }

  static defaultProps = {
    per: 0,
    show: true
  }

  render() {

    const { per, show } = this.props;

    // 传进来百分比数值（用于计算的，值的范围是 0 - 100）
    let realPercent: number = 0;

    // 限制数值范围
    if (per > 100) {
      realPercent = 100;
    } else if (per < 0) {
      realPercent = 0;
    } else {
      realPercent = per;
    }

    // 用于计算的百分比的具体位置
    let percent: number = SCREENWIDTH * (realPercent / 100);
    // 用于展示提示泡泡的位置
    let tipsPosition: number = 0;
    // 用于展示进度条的百分比
    let progressWidth: number = 0;
    // 三角形箭头距离提示泡泡左边的距离
    let arrowPosition: number = 0;
    // 三角形箭头的位置 - 左,中,右
    let arrowType: number = 0;

    if (realPercent < 50) {
      // 小于 50%，三角形箭头在泡泡左边
      arrowType = ARROWPOSITION_LEFT;
      arrowPosition = (ARROWPOSITION_LEFT + ARROW_WIDTH);
      tipsPosition = percent < arrowPosition ? 0 : (percent - arrowPosition);
    } else if (realPercent === 50) {
      // 等于 50%，三角形箭头在泡泡中间
      arrowType = ARROWPOSITION_CENTER;
      arrowPosition = (ARROWPOSITION_CENTER + ARROW_WIDTH);
      tipsPosition = percent - arrowPosition;
    } else {
      // 大于 50%，三角形箭头在泡泡右边
      arrowType = ARROWPOSITION_RIGHT;
      arrowPosition = (ARROWPOSITION_RIGHT + ARROW_WIDTH);
      tipsPosition = percent - arrowPosition;
      // 禁止提示泡泡的位置超出屏幕右边
      if (tipsPosition > (SCREENWIDTH - TIPS_WIDTH)) {
        tipsPosition = SCREENWIDTH - TIPS_WIDTH;
      }
    }
    // 用于展示进度条的百分比
    progressWidth = percent < arrowPosition ? arrowPosition : percent;

    return (
      show &&
      <View style={[styles.progressWrap]}>
        <View style={[styles.progressTipsWrap, { left: tipsPosition }]}>
          <View style={[styles.progressTips]}>
            <Text style={[styles.progressText]}>已完成进度{realPercent}%</Text>
          </View>
          <View style={[styles.triangle, { left: arrowType }]} />
        </View>

        <View style={[styles.progressBar]}>
          <View style={[styles.progress, { width: progressWidth }]}></View>
        </View>

      </View>
    );
  }
}

// 组件样式
const styles = StyleSheet.create({
  // 进度组件最外层包裹框
  progressWrap: {
    position: 'relative',
    width: '100%',
    marginTop: pxToDp(-96),
    paddingTop: pxToDp(84)
  },
  // 百分比进度条（灰色）
  progressBar: {
    position: 'relative',
    width: '100%',
    height: pxToDp(12),
    backgroundColor: '#d9d9d9'
  },
  // 百分比进度（进度颜色）
  progress: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '100%',
    backgroundColor: '#32c1d4'
  },
  // 提示泡泡最外层包裹框
  progressTipsWrap: {
    position: 'absolute',
    bottom: pxToDp(38)
  },
  // 提示泡泡
  progressTips: {
    width: TIPS_WIDTH,
    height: pxToDp(44),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32c1d4',
    borderRadius: pxToDp(20)
  },
  // 提示泡泡里面的文字
  progressText: {
    fontSize: pxToDp(23),
    color: '#fff'
  },
  // 向下的三角形
  triangle: {
    position: 'absolute',
    bottom: pxToDp(-15),
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderTopWidth: pxToDp(16),
    borderRightWidth: ARROW_WIDTH,
    borderLeftWidth: ARROW_WIDTH,
    borderTopColor: '#32c1d4',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  }
});

export { ProgressBottom };

/**
 * @description 底部百分比
 * @param per - 百分比 0 - 100
 * 
 * <ProgressBottom per={30}></ProgressBottom>
 */