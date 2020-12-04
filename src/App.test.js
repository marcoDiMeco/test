import React from "react";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import { AppContainer } from "./containers";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });  

test("render AppContainer", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/list1"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(AppContainer)).toHaveLength(1);
});
