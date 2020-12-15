import React from 'react';
import { ICharactersResult } from '../../../graphql/GraphQl.interface';
import RickyMortyCharacter from '../RickyMortyCharacter/RickyMortyCharacter';

const withRenderCharacter = () => ({ item }: { item: ICharactersResult }) => (
  <RickyMortyCharacter {...item} />
);

export default withRenderCharacter;
