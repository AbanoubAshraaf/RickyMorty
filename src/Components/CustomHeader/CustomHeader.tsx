import React, { useState, useEffect } from 'react';

import { StatusBar, Animated, SafeAreaView } from 'react-native';
import styles from './CustomHeader.style';
import { colors } from '../../appStyles';
import { ICustomHeaderProps } from './CustomHeader.interface';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderController from './HeaderController';

export const CustomHeader = ({
  titleStyle,
  backIcon,
  navigation,
  title,
  searchIcon,
  onChaneName,
}: ICustomHeaderProps) => {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [searchableHeader, setSearchableHeader] = useState(false);

  useEffect(() => {
    if (searchableHeader) {
      animateHeader(1);
    } else {
      animateHeader(0);
    }
  }, [searchableHeader]);

  const animateHeader = (value: number) => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 200,
    }).start();
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar backgroundColor={colors.mainThemeForegroundColor} />
        <HeaderController
          backIcon={backIcon}
          navigation={navigation}
          searchIcon={searchIcon}
          searchableHeader={searchableHeader}
          setSearchableHeader={setSearchableHeader}
          title={title}
          titleStyle={titleStyle}
        />
        <HeaderSearchBar
          animatedValue={animatedValue}
          onChaneName={onChaneName}
          searchableHeader={searchableHeader}
        />
      </SafeAreaView>
    </>
  );
};

export default CustomHeader;
