import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookingContext } from '../@providers/booking/BookingContext';
import AppHeader from '../components/navigation/AppHeader';
import MainContentBookingFlightPage from '../components/page-booking-flight/MainContentBookingFlightPage';
import DetailsBookingInfoSection from '../components/page-booking-flight/sections/DetailsBookingInfoSection';

export default function BookingFlightPage() {
  const booking = React.useContext(BookingContext);

  if (booking.numberOfTickets === 0) {
    return (
      <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-cover bg-no-repeat px-4 py-10 md:px-4 lg:px-0">
        <AppHeader />
        <div className="mx-auto lg:w-[1028px]">
          <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h2 className="w-3/4 text-center text-[40px] font-bold text-light-50 md:w-3/4">
              No set quantity passengers on your booking.
            </h2>
            <NavLink
              to="/flights"
              className="flex h-[40px] items-center rounded-lg border border-riptide-200 p-8 text-riptide-200"
            >
              Return to flights
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <MainContentBookingFlightPage />
      <DetailsBookingInfoSection />
    </div>
  );
}
