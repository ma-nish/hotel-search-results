import { render, screen } from "@testing-library/react"
import HolidayProvider from "../context/holidayContext"
import AvailableHotel from "./AvailableHotel"

describe('hotel rendering', () => {

    // Test - 1
    it("should render any hotel", () => {
        render(<HolidayProvider>
            <AvailableHotel />
        </HolidayProvider>)

        const defaultText = screen.getByText(/Search to get available offers/i)
        expect(defaultText).toBeInTheDocument()
    })
})