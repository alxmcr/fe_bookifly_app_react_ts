import React from 'react';
import FlightSelectedProvider from './flight-selected/FlightSelectedProvider';
import SearchFlightProvider from './search-flight/SearchFlightProvider';

type Props = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
  return (
    <SearchFlightProvider>
      <FlightSelectedProvider>{children}</FlightSelectedProvider>
    </SearchFlightProvider>
  );
}
