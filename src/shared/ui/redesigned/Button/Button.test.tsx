import { render, screen } from "@testing-library/react";

import { ButtonRedesigned } from "./Button";

describe("TEST FOR BUTTON", () => {
  test("First test", () => {
    render(<ButtonRedesigned>Test</ButtonRedesigned>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("Have class", () => {
    render(<ButtonRedesigned variant="clear">Test</ButtonRedesigned>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
