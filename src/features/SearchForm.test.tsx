import { render, screen } from "@testing-library/react"
import HolidayProvider from "../context/holidayContext"
import SearchForm from "./SearchForm"

describe('render search form', () => {

    // Test - 1
    it("should display text", () => {
        render(<HolidayProvider>
            <SearchForm />
        </HolidayProvider>)
        const form = screen.getByTestId("search-form")
        expect(form).toBeInTheDocument()
    })
})