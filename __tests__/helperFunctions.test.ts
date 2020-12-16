import {
  ICharactersResult,
  IExistingState,
  IQueryCharactersResponse,
} from '../src/graphql/GraphQl.interface';
import { mergeNewData } from '../src/graphql/links/helperFunctions';

describe('mergeNewData testing', () => {
  let existing: IExistingState = { results: [], ids: [] };

  it('should return existing state if incoming null ', () => {
    expect(mergeNewData(existing, null)).toEqual(existing);
  });
  const dummyData: ICharactersResult = { id: 1, name: 'ricky', image: '' };
  const incoming: IQueryCharactersResponse = { results: [dummyData, dummyData] };

  
  it('should avoid deplucate results ', () => {
    expect(mergeNewData(existing, incoming)).toEqual({ results: [dummyData], ids: [1] });
  });

  const incomingArray: IQueryCharactersResponse = {
    results: [
      { id: 3, name: 'ricky', image: '' },
      { id: 4, name: 'morty', image: '' },
    ],
  };

  const existingArray: IExistingState = {
    results: [
      { id: 1, name: 'ricky', image: '' },
      { id: 2, name: 'morty', image: '' },
    ],
    ids: [1, 2],
  };

  it('should merge new result ', () => {
    expect(mergeNewData(existingArray, incomingArray)).toEqual({
      results: [...existingArray.results, ...incomingArray.results],
      ids: [1, 2, 3, 4],
    });
  });
});
