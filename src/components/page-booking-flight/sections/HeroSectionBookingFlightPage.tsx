import React from 'react';
import BoxCardBooking from '../../@bookings/BoxCardBooking';
import { BookingContext } from '../../../@providers/booking/BookingContext';

export default function HeroSectionBookingFlightPage() {
  const booking = React.useContext(BookingContext);

  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[130px] lg:w-[1028px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 p-4 md:min-w-[320px] md:px-10">
            <BoxCardBooking booking={booking} />
          </div>{' '}
        </div>
      </div>
    </section>
  );
}
