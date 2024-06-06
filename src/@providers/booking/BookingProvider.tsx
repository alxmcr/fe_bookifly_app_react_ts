import React from 'react';
import { BookingData } from '../../@types/provider/providerTypes';
import { initialBooking } from '../../mocks/data/mock-provider-data';
import { BookingContext, SetBookingContext } from './BookingContext';

type Props = {
  children: React.ReactNode;
};

export default function BookingProvider({ children }: Props) {
  const [currentBooking, setCurrentBooking] = React.useState<BookingData>(initialBooking);

  return (
    <BookingContext.Provider value={currentBooking}>
      <SetBookingContext.Provider value={setCurrentBooking}>{children}</SetBookingContext.Provider>
    </BookingContext.Provider>
  );
}
