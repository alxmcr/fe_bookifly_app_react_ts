import React from 'react';
import { initialBookingState } from '../../mocks/data/mock-provider-data';
import bookingReducers from '../../store/booking/@reducers/reducers';
import { BookingContext, BookingDispatchContext } from './BookingContext';

type Props = {
  children: React.ReactNode;
};

export default function BookingProvider({ children }: Props) {
  const [booking, dispatch] = React.useReducer(bookingReducers, initialBookingState);

  return (
    <BookingContext.Provider value={booking}>
      <BookingDispatchContext.Provider value={dispatch}>{children}</BookingDispatchContext.Provider>
    </BookingContext.Provider>
  );
}
