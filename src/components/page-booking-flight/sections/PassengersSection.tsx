import React from 'react';
import AccordionPassengers from '../../@passengers/accordion-passengers/AccordionPassengers';
import { BookingContext } from '../../../@providers/booking/BookingContext';

export default function PassengersSection() {
  const booking = React.useContext(BookingContext);

  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto h-screen lg:w-[1028px]">
        <div className="flex h-screen flex-col gap-[50px] px-4 md:px-10 lg:px-0">
          <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">
            Passengers information ({booking.numberOfTickets})
          </h2>
          <AccordionPassengers />
        </div>
      </div>
    </section>
  );
}
