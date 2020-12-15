import { InMemoryCache } from '@apollo/client';
import { IChractersResult, IExistingState, IQueryChractersResponse } from '../GraphQl.interface';
import { mergeNewData } from './helperFunctions';

const initalState: IExistingState = { results: [], ids: [] };
export const rickyCache = new InMemoryCache({
    dataIdFromObject: (object: IChractersResult) => {
        object;
    },
    typePolicies: {
        Query: {
            fields: {
                characters: {
                    keyArgs: ['filter'],
                    merge(existing = initalState, incoming: IQueryChractersResponse) {
                        const mergedData :IExistingState = mergeNewData(existing, incoming);
                        return mergedData;
                    },
                },
            },
        },
    },
});
