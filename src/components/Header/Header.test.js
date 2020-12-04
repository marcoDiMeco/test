import React from "react";
import renderer from "react-test-renderer";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Header from "./";

const history = createBrowserHistory();

describe("Header component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
