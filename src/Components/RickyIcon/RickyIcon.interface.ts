import { ImageStyle, ViewStyle } from 'react-native';

export interface IRickyIconProps {
  source: number;
  onPress: () => void;
  iconStyle?: ImageStyle;
  enable: boolean;
  containerStyle?: ViewStyle;
}
