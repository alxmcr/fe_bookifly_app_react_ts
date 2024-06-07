import React from 'react';
import { BookingAction, BookingState } from '../../@types/store/storeTypes';
import { initialBookingState } from '../../mocks/data/mock-provider-data';

export const BookingContext = React.createContext<BookingState>(initialBookingState);
export const BookingDispatchContext = React.createContext<React.Dispatch<BookingAction>>(() => {});
