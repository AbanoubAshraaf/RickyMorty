// @flow
import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HeaderSearchBar from "../src/Components/CustomHeader/HeaderSearchBar";
import * as sinon from "sinon";

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});
test("HeaderSearchBar change name after 0.5 second from leaving keyboard", () => {
  const newValue = "rick";
  const onChangeFunc = jest.fn();
  const interpolate = jest.fn();

  const { getByTestId } = render(
    <HeaderSearchBar
      onChaneName={onChangeFunc}
      searchableHeader={true}
      animatedValue={{ interpolate: interpolate }}
    />
  );

  const searchInput = getByTestId("searchBarTextInput");
  fireEvent.changeText(searchInput, newValue);
  clock.tick(500);

  expect(onChangeFunc).toBeCalledWith(newValue);
});
