import React from "react";
import { TouchableHighlight, Image } from "react-native";
import styles from "./CustomIcon.style";
import { ICustomIconProps } from "./CustomIcon.interface";

const CustomIcon = ({
  source,
  onPress,
  iconStyle,
  enable,
  containerStyle,
}: ICustomIconProps) => {
  if (!enable) {
    return null;
  }
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#88aaaaaa"
      style={[styles.iconContainer, containerStyle]}
    >
      <Image
        source={source}
        style={[styles.iconStyle, iconStyle]}
        resizeMode="center"
      />
    </TouchableHighlight>
  );
};
export default CustomIcon;
