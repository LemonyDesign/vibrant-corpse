import React from "react";
import renderer from "react-test-renderer";
import Word from "../../src/components/Word";

describe("Word", () => {
  test("should render correctly", () => {
    const tree = renderer
      .create(<Word modifier="Crazy" photo="Monkey" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
