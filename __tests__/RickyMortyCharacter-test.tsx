// @flow
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RickyMortyCharacter from '../src/Screens/Characters/RickyMortyCharacter/RickyMortyCharacter';

test('Character item click working ', () => {
  const onPressFunc = jest.fn();

  const { getByTestId } = render(
    <RickyMortyCharacter onCharacterPress={onPressFunc} image="" name="" id={1} />,
  );
  const character = getByTestId('characterContainer');
  fireEvent.press(character);
  expect(onPressFunc).toHaveBeenCalled();
});
