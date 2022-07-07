import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

// Mock data
const holiday = {
  "totalPrice": 1127.30,
  "pricePerPerson": 1127.30,
  "depositPerPerson": 1127.30,
  "webDiscount": 0.00,
  "deposit": 1127.30,
  "hotel": {
    "id": "HB97568",
    "name": "St. Regis New York",
    "boardBasis": "Room Only",
    "content": {
      "name": "St. Regis New York",
      "virginView": "Elegance and sophistication through and through, the 5-star St Regis New York oozes pure grace from every angle.",
      "telephoneBookableOnly": false,
      "vRating": "5+",
      "hotelDescription": "Elegance and sophistication through and through, the 5-star St Regis New York oozes pure grace from every angle.",
      "location": {
        "lat": 40.761402,
        "lon": -73.97461
      },
      "parentLocation": "Midtown, New York",
      "images": [{
        "RESULTS_CAROUSEL": { "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-1-results_carousel.jpg?version=16" },
        "MOBILE_MAIN": { "url": "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-1-mobile_main.jpg?version=16" }, "IMAGE_DESCRIPTION": ""
      }],
      "hotelFacilities": ["Restaurant", "Bar", "Spa", "Room Service", "Valet parking", "Safety Deposit Box", "Fitness Centre/Gym", "Laundry Service", "Internet Access"],
      "salesMessages": [],
      "propertyType": "Hotel",
    },
    "tripAdvisor": {
      "numReviews": 1156,
      "ratingImageUrl": "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg"
    }
  },
  "locationWidened": false,
  "flyingClubMiles": 2255,
  "virginPoints": 2255,
  "tierPoints": 40,
  "departureDate": "2022-06-08",
  "selectedDate": "2022-06-08"
}

describe("when rendered with a `holiday` prop", () => {

  // Test - 1
  it("should display hotel related contents on card", () => {
    render(<HotelCard holiday={holiday} />);
    expect(screen.getByText(/St. Regis New York/)).toBeInTheDocument();
    expect(screen.getByText(/Elegance and sophistication through and through, the 5-star St Regis New York oozes pure grace from every angle./)).toBeInTheDocument();
  });

  // Test - 2
  test('should render image', () => {
    render(<HotelCard holiday={holiday} />);
    const hotelImg = screen.getByRole('img');
    expect(hotelImg).toHaveAttribute('src', "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/810984/810984-1-results_carousel.jpg?version=16");
    expect(hotelImg).toHaveAttribute('alt', 'Hotel');
  });
});

