import React from 'react';
import { BookingContext, BookingDispatchContext } from '../../../@providers/booking/BookingContext';
import { initialTemporalPassenger } from '../../../mocks/data/mock-provider-data';
import { addPassengerAction } from '../../../store/booking/@actions/actions';
import BoxFormPassenger from '../BoxFormPassenger';
import ItemAccordionPassenger from '../accordion-item-passengers/ItemAccordionPassenger';
import './AccordionPassengers.css';

export default function AccordionPassengers() {
  const booking = React.useContext(BookingContext);
  const dispatchBooking = React.useContext(BookingDispatchContext);

  React.useEffect(() => {
    for (let index = 1; index <= booking.numberOfTickets; index++) {
      addPassengerAction({ ...initialTemporalPassenger, pa_temporal_id: index }, dispatchBooking);
    }
  }, [booking.numberOfTickets, dispatchBooking]);

  return (
    <div className="accordion">
      {booking.passengers.map((passenger, index) => (
        <ItemAccordionPassenger key={passenger.pa_temporal_id} summary={`Passenger ${index + 1}`}>
          <BoxFormPassenger />
        </ItemAccordionPassenger>
      ))}
    </div>
  );
}
