import React from 'react'
import { Card } from 'react-bootstrap'
import { HolidayData } from '../../constants/types';

import hotel from '../../assets/images/hotel.svg'
import DisplayRating from '../rating/DisplayRating';

const HotelCard: React.FunctionComponent<{ holiday: HolidayData }> = ({ holiday }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={holiday.hotel.content?.images[0]?.RESULTS_CAROUSEL?.url || hotel}
        alt="Hotel"
      />
      <Card.Body>
        <Card.Title className='title'>
          <label>{holiday.hotel.name}</label>
          <DisplayRating rating={Number(holiday.hotel.content.starRating)} />
        </Card.Title>
        <div>
          <p className='description'>
            {holiday.hotel.content.hotelDescription}
          </p>
          {holiday.hotel.content?.hotelFacilities ?
            <>
              <h6>Facilities</h6>
              <ul>
                {holiday.hotel.content.hotelFacilities.map((op: string, idx: number) => <li key={idx}>{op}</li>)}
              </ul>
            </> : null}
        </div>
      </Card.Body>
      <Card.Footer>
        ${holiday.depositPerPerson}<small>/per person</small>
      </Card.Footer>
    </Card>
  )
}

export default HotelCard