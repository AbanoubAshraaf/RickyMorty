import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationAction } from "@react-navigation/native";
import Characters from "../Screens/Characters";
import { ICharactersResult } from "../graphql/GraphQl.interface";
import CharacterDetails from "../Screens/CharacterDetails";

export type RootStackParamList = {
  characters: { navigation: NavigationAction };
  characterDetails: {
    navigation: NavigationAction;
    route: { params: ICharactersResult };
  };
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="characters">
      <RootStack.Screen name="characters" component={Characters} />
      <RootStack.Screen name="characterDetails" component={CharacterDetails} />
    </RootStack.Navigator>
  );
};
