import React from 'react';
import { BookingContext } from '../../../@providers/booking/BookingContext';
import BoxBookingCheckoutInfo from '../boxes/BoxBookingCheckoutInfo';
import BoxBookingPassengers from '../boxes/BoxBookingPassengers';

export default function DetailsBookingInfoSection() {
  const booking = React.useContext(BookingContext);

  if (booking.numberOfTickets === 0) {
    return (
      <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
        <div className="mx-auto lg:w-[1028px]">
          <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h2 className="text-[40px] font-bold text-light-50">No passengers on your booking.</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <BoxBookingPassengers />
          <BoxBookingCheckoutInfo />
        </div>
      </div>
    </section>
  );
}
