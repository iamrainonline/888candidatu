import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should increment the count number", () => {
    render(<Counter />);

    const buttonIncrease = screen.getByText("Click to +");

    expect(screen.getByText("0")).toBeInTheDocument(); // initial

    fireEvent.click(buttonIncrease); // 0 → 1

    expect(screen.getByText("1")).toBeInTheDocument(); // check increment
  });

  it("should decrement the count number", () => {
    render(<Counter />);

    const buttonDecrease = screen.getByText("Click to -");

    expect(screen.getByText("0")).toBeInTheDocument(); // initial

    fireEvent.click(buttonDecrease); // 0 → -1

    expect(screen.getByText("-1")).toBeInTheDocument(); // check decrement
  });
});
