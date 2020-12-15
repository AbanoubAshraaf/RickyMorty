import { ImageSourcePropType } from 'react-native';

export interface IAuthLink {
  headers: Headers;
}

export interface IChractersResult {
  id: number;
  name: string;
  image: ImageSourcePropType;
}
export interface IInfo {
  count: number;
}

export interface IQueryChractersResponse {
  results: IChractersResult[];
  info?: IInfo;
}

export interface IExistingState extends IQueryChractersResponse {
  ids: number[];
}
