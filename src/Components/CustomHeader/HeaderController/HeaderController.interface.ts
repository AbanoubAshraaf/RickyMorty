import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { TextStyle } from 'react-native';
import { RootStackParamList } from '../../../Navigator/MainStackNavigator';

export interface IHeaderControllerProps {
  searchableHeader: boolean;
  navigation: StackNavigationProp<RootStackParamList>;
  backIcon: boolean;
  title: string;
  setSearchableHeader: Dispatch<SetStateAction<boolean>>;
  titleStyle: TextStyle;
  searchIcon: boolean;
}
