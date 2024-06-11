import React from 'react';
import AccordionPassengers from '../../@passengers/accordion-passengers/AccordionPassengers';
import { BookingContext } from '../../../@providers/booking/BookingContext';

export default function BoxBookingPassengers() {
  const booking = React.useContext(BookingContext);

  return (
    <div className="flex flex-col gap-[50px] rounded-2xl bg-black px-4 py-7 md:px-10">
      <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">
        Passengers information ({booking.numberOfTickets})
      </h2>
      <AccordionPassengers />
    </div>
  );
}
