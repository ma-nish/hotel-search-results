import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("when rendered with a `title` prop", () => {

  // Test - 1
  it("should display title", () => {
    render(<Header title="Test title" />);
    expect(screen.getByText(/Test title/)).toBeInTheDocument();
  });

  // Test - 2
  it("should render logo", () => {
    render(<Header title="Test title" />)
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute('alt', 'Logo');
  })
});
