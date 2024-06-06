import React from 'react';
import SearchFlightProvider from './search-flight/SearchFlightProvider';
import BookingProvider from './booking/BookingProvider';

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
