import React from "react";
import renderer from "react-test-renderer";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Content from "./";

const history = createBrowserHistory();

describe("Content component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Content />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

