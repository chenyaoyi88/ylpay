import { PixelRatio } from 'react-native';
export const px2dp = (px: number) => PixelRatio.roundToNearestPixel(px);
