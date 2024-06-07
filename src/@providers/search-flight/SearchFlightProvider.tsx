import React from 'react';
import { SearchFlightContext, SearchFlightDispatchContext } from './SearchFlightContext';
import searchFlightReducers from '../../store/search-flight/@reducers/reducers';
import { initialSearchFlightState } from '../../mocks/data/mock-provider-data';

type Props = {
  children: React.ReactNode;
};

export default function SearchFlightProvider({ children }: Props) {
  const [searchFlight, dispatch] = React.useReducer(searchFlightReducers, initialSearchFlightState);

  return (
    <SearchFlightContext.Provider value={searchFlight}>
      <SearchFlightDispatchContext.Provider value={dispatch}>{children}</SearchFlightDispatchContext.Provider>
    </SearchFlightContext.Provider>
  );
}
