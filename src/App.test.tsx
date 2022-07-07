import { render, screen } from "@testing-library/react"
import App from "./App"

describe('testing base app component', () => {

    // Test - 1
    it('should render Header component', () => {
        render(<App />)
        expect(screen.getByText("Your best days with...")).toBeInTheDocument()
    })

    // Test - 3
    it("should render separator <hr />", () => {
        render(<App />)
        const separator = screen.getByRole("separator")
        expect(separator).toBeInTheDocument()
    })
})