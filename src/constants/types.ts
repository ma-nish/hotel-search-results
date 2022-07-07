export interface PartyCompositionType {
  adults: number;
  childAges: number[];
  infants: number;
}

export interface BookingRequest {
  bookingType: string;
  location: string;
  departureDate: string;
  duration: number;
  partyCompositions: PartyCompositionType[];
}

export interface HolidayData {
  departureDate: string;
  deposit: number;
  depositPerPerson: number;
  flyingClubMiles: number;
  locationWidened?: boolean;
  pricePerPerson: number;
  selectedDate: string;
  tierPoints: number;
  totalPrice: number;
  virginPoints: number;
  webDiscount: number;
  hotel: {
    id: string;
    boardBasis: string;
    name: string;
    tripAdvisor: {
      numReviews: number;
      ratingImageUrl: string;
    };
    content: any;
  };
}

export type HolidaysContextType = {
  holidays: HolidayData[];
  saveHolidays: (holiday: HolidayData[]) => void;
};
