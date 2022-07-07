import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Button, Toast, ButtonGroup, Form } from 'react-bootstrap'
import "./AvailableHotel.css"
import { HolidayData, HolidaysContextType } from '../constants/types';
import { HolidayContext } from '../context/holidayContext';
import { HOTEL_FACILTITIES, PRICE_PER_PERSON } from '../constants/search';
import HotelCard from '../components/hotelCard/HotelCard';

export type PriceOption = {
  label: string;
  value: [number, number];
};

const AvailableHotel: React.FunctionComponent = () => {
  const { holidays } = React.useContext(HolidayContext) as HolidaysContextType;
  const [holidaysToShow, setHolidaysToShow] = useState<HolidayData[]>([])
  const [rating, setRating] = useState<number>(0);
  const [facilities, setFacilities] = useState<string[]>([]);
  const [pricePerPerson, setPricePerPerson] = useState<[number, number]>([-1, 10000]);

  // Set holidays data to component state
  useEffect(() => {
    setHolidaysToShow(holidays);
  }, [holidays])

  // Filter holidays data by rating
  const filterByRating = useCallback((rating: number) => {
    const filteredData = holidays.filter((option: HolidayData) =>
      Number(option.hotel.content.starRating) > rating - 1);

    // Set filtered data to component state
    setHolidaysToShow([...filteredData]);
  }, [holidays])

  useEffect(() => {
    filterByRating(rating);
  }, [filterByRating, rating])

  // Filter holidays data by available facilities
  const filterByFacilities = useCallback((facilities: string[]) => {
    let filteredData: HolidayData[] = holidays

    facilities.forEach((option: string) => {
      filteredData = filteredData.filter((op: HolidayData) =>
        op.hotel.content.hotelFacilities?.includes(option))
    })

    // Set filtered data to component state
    setHolidaysToShow([...filteredData]);
  }, [holidays])

  useEffect(() => {
    filterByFacilities(facilities);
  }, [filterByFacilities, facilities])

  // Filter holidays data by price per person
  const filterByPricePerPerson = useCallback((price: [number, number]) => {
    const filteredData = holidays.filter((option) =>
      Number(option.depositPerPerson) > price[0] - 1 && Number(option.depositPerPerson) < price[1] + 1);

    // Set filtered data to component state
    setHolidaysToShow([...filteredData]);
  }, [holidays])

  useEffect(() => {
    filterByPricePerPerson(pricePerPerson);
  }, [filterByPricePerPerson, pricePerPerson])

  // Facility selection in filter
  const handleFacilityChange = (facility: string) => {
    let availableFacilities: string[] = facilities;

    if (facilities.includes(facility)) {
      availableFacilities = facilities.filter((op: string) => op !== facility);
    } else {
      availableFacilities.push(facility);
    }

    setFacilities([...availableFacilities]);
  }

  // Price change in filter
  const handlePriceChange = (price: [number, number]) => {
    setPricePerPerson(price);
  }

  // Clear filter
  const handleClear = () => {
    setRating(0);
    setFacilities([]);
    setPricePerPerson([-1, 10000]);
    setHolidaysToShow([...holidays]);
  }

  return (
    <div data-testid="hotels">
      {holidays.length ? <Row>
        <Col md="3">
          <Toast>
            <Toast.Header closeButton={false}>
              <i className="rounded me-2 fa fa-filter" aria-hidden="true" />
              <strong className="me-auto">Filter</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body>
              <ButtonGroup className="w-100" aria-label="First group">
                <Button variant="light" onClick={() => setRating(1)}>
                  <span className={rating > 0 ? "fa fa-star checked" : "fa fa-star"}></span>
                </Button>
                <Button variant="light" onClick={() => setRating(2)}>
                  <span className={rating > 1 ? "fa fa-star checked" : "fa fa-star"}></span>
                </Button>
                <Button variant="light" onClick={() => setRating(3)}>
                  <span className={rating > 2 ? "fa fa-star checked" : "fa fa-star"}></span>
                </Button>
                <Button variant="light" onClick={() => setRating(4)}>
                  <span className={rating > 3 ? "fa fa-star checked" : "fa fa-star"}></span>
                </Button>
                <Button variant="light" onClick={() => setRating(5)}>
                  <span className={rating > 4 ? "fa fa-star checked" : "fa fa-star"}></span>
                </Button>
              </ButtonGroup>
              <hr />
              <Form.Label><b>Facilities</b></Form.Label><br />
              <ButtonGroup className="me-2" aria-label="First group">
                <Row>
                  {HOTEL_FACILTITIES.map((option: string, idx: number) =>
                    <Form.Check
                      key={idx}
                      id={"facility" + idx}
                      className='m-2'
                      type='checkbox'
                      label={option}
                      checked={facilities.includes(option)}
                      onChange={() => handleFacilityChange(option)}
                    />
                  )}
                </Row>
              </ButtonGroup>
              <hr />
              <Form.Label><b>Price per person</b></Form.Label>
              <ButtonGroup className="me-2" aria-label="First group">
                <Row>
                  {PRICE_PER_PERSON.map((option: any, idx: number) =>
                    <Form.Check
                      key={idx}
                      name="price"
                      id={'price-' + idx}
                      className='m-2'
                      type='radio'
                      label={option.label}
                      checked={pricePerPerson[0] === option.value[0]}
                      onChange={() => handlePriceChange(option.value)}
                    />
                  )}
                </Row>
              </ButtonGroup>
            </Toast.Body>
            <Row>
              <Button variant='light' className='me-2' onClick={handleClear}>Clear</Button>
            </Row>
          </Toast>
        </Col>
        <Col md="9">
          <Row xs={1} md={2} className="g-4">
            {holidaysToShow?.length ? holidaysToShow.map((el: HolidayData) =>
              <Col key={el.hotel.id}>
                <HotelCard holiday={el} />
              </Col>
            ) : null}
          </Row>
        </Col>
      </Row> : <Row className='m-5'><label>Search to get available offers</label></Row>}
    </div>

  )
}

export default AvailableHotel