import { render, screen } from "@testing-library/react";
import CounterDisplay from "./CounterDisplay";

describe("when rendered with a `count` prop", () => {
  it("should display counting in counter", () => {
    render(<CounterDisplay count={0} />);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });
});
