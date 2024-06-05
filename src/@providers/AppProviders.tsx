import React from 'react';
import SearchFlightProvider from './search/SearchFlightProvider';

type Props = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
  return <SearchFlightProvider>{children}</SearchFlightProvider>;
}
