import { ApolloProvider } from "@apollo/client";
import React, { useEffect } from "react";
import { rickyClient } from "./src/graphql";
import { NavigationContainer } from "@react-navigation/native";
import {
  linking,
  MainStackNavigator,
} from "./src/Navigator/MainStackNavigator";
import * as Sentry from "@sentry/react-native";
import { LogBox } from "react-native";

Sentry.init({
  dsn:
    "https://3c4600d2cfad491f80e635c93b1c54ad@o490678.ingest.sentry.io/5558886",
});

const mainApp = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <ApolloProvider client={rickyClient}>
      <NavigationContainer linking={linking}>
        <MainStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default mainApp;
