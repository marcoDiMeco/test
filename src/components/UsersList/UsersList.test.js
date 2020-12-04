import React from "react";
import renderer from "react-test-renderer";
import UsersList from "./";

describe("UsersList component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<UsersList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
