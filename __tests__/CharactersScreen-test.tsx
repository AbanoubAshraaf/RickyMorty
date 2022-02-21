import "react-native";
import React from "react";

import { render, cleanup } from "@testing-library/react-native";
import { FlatList } from "react-native";
import { ICharactersResult } from "../src/graphql/GraphQl.interface";
import RickyMortyCharacter from "../src/Screens/Characters/RickyMortyCharacter/RickyMortyCharacter";

afterEach(cleanup);
describe("charachters Screen tests", () => {
  it("renders flatList correctly", () => {
    const mockFn = jest.fn();
    const hocFunction = (onChangeFunction: () => void) => ({
      item,
    }: {
      item: ICharactersResult;
    }) => <RickyMortyCharacter {...item} onCharacterPress={onChangeFunction} />;
    const flatList = render(
      <FlatList
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={hocFunction(mockFn)}
      />
    ).toJSON();
    expect(flatList).toMatchSnapshot();
  });
});
