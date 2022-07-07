import { render, screen } from "@testing-library/react"
import ChildAge from "./ChildAge"

describe('renders array of elements', () => {

    // Test - 1
    it("should render select DOM element", () => {
        const mockFn = jest.fn()
        render(<ChildAge childAges={[]} childrens={0} setChildAges={mockFn} />);
        const component = screen.getByTestId("child-age")
        expect(component).toBeEmptyDOMElement()
    })
})