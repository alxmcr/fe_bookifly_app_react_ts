import React from 'react';
import SearchFlightProvider from './search-flight-xxx/SearchFlightProvider';
import BookingProvider from './booking-xxx/BookingProvider';

type Props = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
  return (
    <SearchFlightProvider>
      <BookingProvider>{children}</BookingProvider>
    </SearchFlightProvider>
  );
}
