/**
 * @format
 */

console.error = function () {};
console.debug = function () {};

if (!__DEV__) {
  console.warn = () => {};
  console.log = () => {};
}

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
