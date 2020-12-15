import React, { useState } from 'react';

import { Animated, TextInput } from 'react-native';
import styles from './HeaderSearchBar.style';
import { colors } from '../../../appStyles';
import debounce from 'lodash.debounce';
import { IHeaderSearchBarProps } from './HeaderSearchBar.interface';

export const HeaderSearchBar = ({
  searchableHeader,
  onChaneName,
  animatedValue,
}: IHeaderSearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedOnChange = debounce(onChaneName, 500);
  if (!searchableHeader) {
    return null;
  }
  return (
    <Animated.View style={styles.searchableContainer(animatedValue)}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.grey0}
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
