import React from "react";
import renderer from "react-test-renderer";
import Loading from "./";

describe("Loading component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
