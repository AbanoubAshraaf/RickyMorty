import { StackNavigationProp } from "@react-navigation/stack";
import { ICharactersResult } from "../../graphql/GraphQl.interface";
import { RootStackParamList } from "../../Navigator/MainStackNavigator";

type CharctersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "characters"
>;

export interface ICharactersProps {
  navigation: CharctersScreenNavigationProp;
}

export interface IRickyMortyCharacterProps extends ICharactersResult {
  onCharacterPress?: (item: ICharactersResult) => void;
}
