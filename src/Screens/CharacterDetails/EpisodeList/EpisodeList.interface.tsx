import { ApolloError } from "@apollo/client";
import { IEspoide } from "../CharacterDetails.interface";

export interface IEpisodeListProps {
  episodes: IEspoide[];
  loading: boolean;
  error: ApolloError | undefined;
}
