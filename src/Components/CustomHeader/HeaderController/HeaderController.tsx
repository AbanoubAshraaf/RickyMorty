import React from 'react';

import { Text, View } from 'react-native';
import styles from './HeaderController.style';
import { IHeaderControllerProps } from './HeaderController.interface';
import CustomIcon from '../../CustomIcon/CustomIcon';
import { icons } from '../../../AppStyles';

export const HeaderController = ({
  searchableHeader,
  navigation,
  backIcon,
  title,
  setSearchableHeader,
  titleStyle,
  searchIcon,
}: IHeaderControllerProps) => {
  return (
    <View style={styles.container}>
      <CustomIcon
        enable={backIcon}
        source={icons.backArrow2}
        onPress={() => {
          navigation.goBack();
        }}
        containerStyle={{ transform: [{ rotate: '180deg' }] }}
      />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <CustomIcon
        enable={searchIcon}
        source={icons.search}
        onPress={() => {
          setSearchableHeader(!searchableHeader);
        }}
        containerStyle={{ transform: [{ rotate: '90deg' }] }}
      />
    </View>
  );
};

export default HeaderController;
