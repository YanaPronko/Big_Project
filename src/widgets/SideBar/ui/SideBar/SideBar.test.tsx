import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";

describe("SideBar", () => {
  test("Render SideBar", () => {
    renderWithTranslation(<SideBar/>);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Have a collapsed class", () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId("toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collappsed");
  });
});
