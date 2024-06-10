import React from 'react';
import AccordionPassengers from '../../@passengers/accordion-passengers/AccordionPassengers';
import { BookingContext } from '../../../@providers/booking/BookingContext';

export default function BoxBookingPassengers() {
  const booking = React.useContext(BookingContext);

  return (
    <div className="flex h-screen flex-col gap-[50px] rounded-lg bg-black px-4 py-2 md:px-10 lg:px-0">
      <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">
        Passengers information ({booking.numberOfTickets})
      </h2>
      <AccordionPassengers />
    </div>
  );
}