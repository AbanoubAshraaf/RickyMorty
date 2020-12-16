import { InMemoryCache } from '@apollo/client';
import { ICharactersResult, IExistingState, IQueryCharactersResponse } from '../GraphQl.interface';
import { mergeNewData } from './helperFunctions';

const initalState: IExistingState = { results: [], ids: [] };
export const rickyCache = new InMemoryCache({
  dataIdFromObject: (object: ICharactersResult) => {
    object;
  },
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing = initalState, incoming: IQueryCharactersResponse) {
            const mergedData: IExistingState = mergeNewData(existing, incoming);
            return mergedData;
          },
        },
      },
    },
  },
});
