import { ImageSourcePropType } from "react-native";

export interface IAuthLink {
  headers: Headers;
}

export interface ICharactersResult {
  id: number;
  name?: string;
  image?: ImageSourcePropType;
}
export interface IInfo {
  count: number;
}

export interface IQueryCharactersResponse {
  results: ICharactersResult[];
  info?: IInfo;
}

export interface IExistingState extends IQueryCharactersResponse {
  ids: number[];
}
