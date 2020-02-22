// __tests__/Intro-test.js
import React from "react";
import Explore from "./Explore";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Explore />).toJSON();
  expect(tree).toMatchSnapshot();
});
