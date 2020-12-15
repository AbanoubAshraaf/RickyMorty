import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './Characters.styles';
import { ICharactersProps } from './Characters.types';


const Characters = ({navigation}:ICharactersProps) => {
  return (
    <View style={styles.container}>
     <Text>hello ricky and marty ;) !</Text>
    </View>
  );
};




export default Characters;
