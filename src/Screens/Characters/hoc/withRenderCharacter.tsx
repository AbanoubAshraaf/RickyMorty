import React from "react";
import { ICharactersResult } from "../../../graphql/GraphQl.interface";
import RickyMortyCharacter from "../RickyMortyCharacter/RickyMortyCharacter";

const withRenderCharacter = (
  onCharacterPress: (item: ICharactersResult) => void
) => ({ item }: { item: ICharactersResult }) => (
  <RickyMortyCharacter {...item} onCharacterPress={onCharacterPress} />
);

export default withRenderCharacter;
