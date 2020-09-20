import React from "react";
import { render } from "@testing-library/react";
import Home from "./home.container";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
  const headingElement = getByText(/SpaceX Launch Programs/i);
  expect(headingElement).toBeInTheDocument();
});
