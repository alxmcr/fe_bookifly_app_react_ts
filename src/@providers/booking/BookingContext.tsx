import React from 'react';
import { BookingData } from '../../@types/provider/providerTypes';
import { initialBooking } from '../../mocks/data/mock-provider-data';

export const BookingContext = React.createContext<BookingData>(initialBooking);

export const SetBookingContext = React.createContext<React.Dispatch<React.SetStateAction<BookingData>>>(
  () => {},
);
