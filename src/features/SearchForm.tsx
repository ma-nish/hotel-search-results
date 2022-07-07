import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import PartyComposition from '../components/partyComposition/PartyComposition';

import { AVAILABLE_LOCATIONS, BOOKING_TYPES, DURATION } from '../constants/search';
import { HolidaysContextType, PartyCompositionType } from '../constants/types';
import { HolidayContext } from '../context/holidayContext';
import { postData } from '../services';

export type LocationOption = {
  label: string;
  value: string;
};

export type DurationOption = {
  label: string;
  value: number;
};

const today = new Date()

// add 1 day to today
today.setDate(new Date().getDate() + 1)

let currentDate = new Date(today).toISOString().split("T")[0]

const SearchForm: React.FunctionComponent = () => {
  const { saveHolidays } = React.useContext(HolidayContext) as HolidaysContextType;

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>(currentDate);
  const [duration, setDuration] = useState<number>(1);
  const [partyCompositions, setPartyCompositions] = useState<PartyCompositionType>({
    adults: 0,
    childAges: [],
    infants: 0
  });
  const [validated, setValidated] = useState<boolean>(false);

  // Submit form to fetch available holiday offers
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement
    setValidated(true);

    if (form.checkValidity()) {
      setLoading(true);
      postData("/cjs-search-api/search", {
        "bookingType": BOOKING_TYPES[0].value,
        "location": destination,
        "departureDate": departureDate?.split("-").reverse().join("-"),
        "duration": duration,
        "partyCompositions": [
          partyCompositions
        ]
      })
        .then((response) => {
          saveHolidays(response?.holidays);
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          throw new Error(error);
        })
    }
  }

  // Handle form change events
  const handleDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(event.target.value)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(event.target.value)
  }

  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(Number(event.target.value))
  }

  return (
    <Container className='search-container' data-testid="search-form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col md="10">
            <Row><Form.Group as={Col} md="3" controlId="validationCustom01">
              <FloatingLabel controlId="floatingSelectGrid" label="Select Destination">
                <Form.Select
                  required
                  aria-label="Floating label select example"
                  value={destination}
                  onChange={handleDestinationChange}
                >
                  <option disabled value={""}>Where to go</option>
                  {AVAILABLE_LOCATIONS.map((option: LocationOption) =>
                    <option key={option.value} value={option.value}>{option.label}</option>
                  )}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <FloatingLabel controlId="floatingTextarea" label="Departure Date" className="mb-3">
                  <Form.Control
                    required
                    type="date"
                    value={departureDate}
                    min={currentDate}
                    onChange={handleDateChange}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <FloatingLabel controlId="floatingTextarea" label="Duration (Days to stay)" className="mb-3">
                  <Form.Select
                    required
                    aria-label="Floating label select example"
                    value={duration}
                    onChange={handleDurationChange}
                  >
                    {DURATION.map((option: DurationOption) =>
                      <option key={option.value} value={option.value}>{option.label}</option>
                    )}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <FloatingLabel controlId="floatingTextarea" label="Who's Going" className="mb-3">
                  <Form.Control
                    required
                    aria-label="Floating label select example"
                    value={partyCompositions.adults ?
                      `Adult ${partyCompositions.adults}, Child ${partyCompositions.childAges.length}, Infants ${partyCompositions.infants}`
                      : ""}
                    onChange={() => setModalShow(true)}
                    onClick={() => setModalShow(true)}
                  />
                </FloatingLabel>
                <PartyComposition
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  setValue={setPartyCompositions}
                />
              </Form.Group></Row>
          </Col>
          <Col md="2">
            <Button disabled={loading} variant="outline-secondary" type="submit" size="lg" className='mt-1'>
              {loading ?
                <i className="fa fa-spinner" aria-hidden="true" /> :
                <i className="fa fa-search" aria-hidden="true" />
              }
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default SearchForm