import { Dimensions, Platform } from 'react-native';
// export const pxToDp = (px: any) => PixelRatio.roundToNearestPixel(px);
// app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp: number = Dimensions.get('window').width;
// UI 默认给图是 750
const uiWidthPx: number = Platform.OS === 'ios' ? 750 : 720;

// 返回真实的尺寸
export function pxToDp(px: number): number {
    return px * deviceWidthDp / uiWidthPx;
}
