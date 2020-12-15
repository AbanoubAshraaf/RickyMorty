import { InMemoryCache } from '@apollo/client';
import { mergeNewData } from './helperFunctions';
const initalState = { results: [], ids: [] };
export const rickyCache = new InMemoryCache({
  dataIdFromObject: (object) => {
    object;
  },
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing = initalState, incoming) {
            const mergedData=mergeNewData(existing,incoming)
            return mergedData
          },
        },
      },
    },
  },
});
