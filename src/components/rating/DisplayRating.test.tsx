import { render, screen } from "@testing-library/react"
import DisplayRating from "./DisplayRating"

describe('when rendered with prop rating', () => {
    it("should render star icons equal to rating", () => {
        render(<DisplayRating rating={2} />)
        const stars = screen.getAllByTestId("rating")
        expect(stars).toHaveLength(5);
        expect(stars[0]).toHaveClass("fa fa-star checked")
        expect(stars[1]).toHaveClass("fa fa-star checked")
        expect(stars[2]).toHaveClass("fa fa-star")
        expect(stars[3]).toHaveClass("fa fa-star")
        expect(stars[4]).toHaveClass("fa fa-star")
    })
})