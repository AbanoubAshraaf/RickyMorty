import React from 'react';

import { Text, View } from 'react-native';
import styles from './HeaderController.style';
import { IHeaderControllerProps } from './HeaderController.interface';
import RickyIcon from '../../RickyIcon/RickyIcon';
import { icons } from '../../../appStyles';

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
      <RickyIcon
        enable={backIcon}
        source={icons.backArrow2}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <RickyIcon
        enable={searchIcon}
        source={icons.search}
        onPress={() => {
          setSearchableHeader(!searchableHeader);
        }}
      />
    </View>
  );
};

export default HeaderController;
