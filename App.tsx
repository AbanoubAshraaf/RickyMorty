import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { rickyClient } from './src/graphql';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/Navigator/MainStackNavigator';
import { LogBox } from 'react-native';

const mainApp = () => {
  LogBox.ignoreAllLogs(true)
  return (
    <ApolloProvider client={rickyClient}>
      <NavigationContainer>
        
        <MainStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default mainApp;
