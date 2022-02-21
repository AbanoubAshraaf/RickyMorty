import { TextStyle } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigator/MainStackNavigator";

export interface ICustomHeaderProps {
  title: string;
  titleStyle?: TextStyle;
  backIcon?: boolean;
  searchIcon?: true;
  navigation?: StackNavigationProp<RootStackParamList>;
  onChaneName?: (text: string) => void;
}
