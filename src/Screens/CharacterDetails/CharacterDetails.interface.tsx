import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";
import { ICharactersResult } from "../../graphql/GraphQl.interface";
import { RootStackParamList } from "../../Navigator/MainStackNavigator";

type CharacterDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "characterDetails"
>;

export interface ICharacterDetailsProps {
  navigation: CharacterDetailsScreenNavigationProp;
  route: { params: ICharactersResult };
}

enum gender {
  male = "male",
  female = "female",
}

export interface IEspoide {
  id: number;
  name: string;
  air_date: Date;
}

export interface IRickyMortyCharcterDetails {
  id: number;
  name: string;
  image: ImageSourcePropType;
  species: string;
  gender: gender;
  episode: IEspoide[];
}
