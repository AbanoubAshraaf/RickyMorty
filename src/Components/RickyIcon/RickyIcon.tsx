import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import styles from './RickyIcon.style';
import { IRickyIconProps } from './RickyIcon.interface';

const RickyIcon = ({ source, onPress, iconStyle, enable }: IRickyIconProps) => {
  if (!enable) {
    return null;
  }
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#88aaaaaa" style={styles.iconContainer}>
      <Image source={source} style={[styles.iconStyle, iconStyle]} resizeMode="center" />
    </TouchableHighlight>
  );
};
export default RickyIcon;
