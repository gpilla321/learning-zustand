import { fireEvent, render, screen } from "@testing-library/react";
import Searchbar from "./Search";
import "@testing-library/jest-dom";

describe("<Home />", () => {
  test("Rendering", () => {
    render(<Searchbar />);
    expect(screen.getByText("This is a search list")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Input onChange", () => {
    render(<Searchbar />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

});
