import { ImageStyle } from 'react-native';

export interface IRickyIconProps {
  source: number;
  onPress: () => void;
  iconStyle?: ImageStyle;
  enable: boolean;
}
