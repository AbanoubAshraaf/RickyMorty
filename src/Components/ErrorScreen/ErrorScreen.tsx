import React from 'react';
import { Text, View } from 'react-native';
import { IErrorScreenProps } from './ErrorScreen.interface';
import styles from './ErrorScreen.styles';

const ErrorScreen = ({ error }: IErrorScreenProps) => {
  if (!error) return null;

  return (
    <View style={styles.container}>
      <Text>Sorry , something went wrong</Text>
    </View>
  );
};

export default ErrorScreen;
