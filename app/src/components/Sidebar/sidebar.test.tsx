import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

describe("<Sidebar />", () => {
  test("Rendering", () => {
    render(<Sidebar />);
    expect(screen.getByText("This is an item")).toBeInTheDocument();
  });
});
