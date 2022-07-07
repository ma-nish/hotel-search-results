import { render, screen } from "@testing-library/react"
import PartyComposition from "./PartyComposition"

describe('when rendered', () => {

    // Test - 1
    it('should mount modal', () => {
        const mockFn = jest.fn();
        render(<PartyComposition show={true} onHide={mockFn} setValue={mockFn} />);
        const modal = screen.getByTestId("modal")
        expect(modal).toBeInTheDocument()
    })
})