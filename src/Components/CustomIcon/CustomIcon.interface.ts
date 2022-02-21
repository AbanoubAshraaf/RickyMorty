import { ImageStyle, ViewStyle } from "react-native";

export interface ICustomIconProps {
  source: number;
  onPress: () => void;
  iconStyle?: ImageStyle;
  enable?: boolean;
  containerStyle?: ViewStyle;
}
