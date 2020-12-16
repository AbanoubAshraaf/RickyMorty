import React, { useState } from 'react';

import { Animated, TextInput } from 'react-native';
import styles from './HeaderSearchBar.style';
import { colors } from '../../../AppStyles';
import debounce from 'lodash.debounce';
import { IHeaderSearchBarProps } from './HeaderSearchBar.interface';

export const HeaderSearchBar = ({
  searchableHeader,
  onChaneName,
  animatedValue,
}: IHeaderSearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedOnChange = debounce(onChaneName, 500);
  if (!searchableHeader || !onChaneName) {
    return null;
  }
  return (
    <Animated.View style={styles.searchableContainer(animatedValue)}>
      <TextInput
        testID="searchBarTextInput"
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.mainTextForegroundColor}
        onChangeText={(text) => {
          setSearchValue(text);
          debouncedOnChange(text);
        }}
        value={searchValue}
      />
    </Animated.View>
  );
};

export default HeaderSearchBar;
