import { render, screen } from "@testing-library/react"
import CounterBtn from "./CounterBtn"

describe('counter button when rendered', () => {

    // Test - 1
    it("should have display value 1", () => {
        const onClick = jest.fn()
        render(<CounterBtn label='Increment' disabled={false} onClick={onClick} />);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveAccessibleName("Increment");
    })

    // Test - 2
    it("should be disabled", () => {
        const onClick = jest.fn()
        render(<CounterBtn label='Increment' disabled={true} onClick={onClick} />);
        const btn = screen.getByRole("button");
        expect(btn).toBeDisabled();
    })
})