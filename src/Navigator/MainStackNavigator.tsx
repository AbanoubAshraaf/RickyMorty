import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationAction } from '@react-navigation/native';
import Characters from '../Screens/Characters';

export type RootStackParamList = {
  characters: { navigation: NavigationAction };
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="characters">
      <RootStack.Screen name="characters" component={Characters} />
    </RootStack.Navigator>
  );
};
