import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe('when couter button rendered', () => {

    // Test - 1
    it("should have 2 buttons", async () => {
        const mockFn = jest.fn()
        render(<Counter count={1} setCount={mockFn} />)
        const btn = await screen.findAllByRole("button");
        expect(btn).toHaveLength(2)
    })

    // Test - 2
    test('display counter text', () => {
        const mockFn = jest.fn()
        render(<Counter count={1} setCount={mockFn} />);

        expect(screen.getByTestId("counter-text")).toHaveTextContent("1");
    });

    // Test - 3
    test('increment click', () => {
        const handleClick = jest.fn()
        render(<Counter count={2} setCount={handleClick} />);
        const btnIncrement = screen.getByRole("button", { name: "+" })
        fireEvent.click(btnIncrement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test - 5
    test('decrement click', () => {
        const handleClick = jest.fn()
        render(<Counter count={2} setCount={handleClick} />);
        const btnDecrement = screen.getByRole("button", { name: "+" })
        fireEvent.click(btnDecrement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})