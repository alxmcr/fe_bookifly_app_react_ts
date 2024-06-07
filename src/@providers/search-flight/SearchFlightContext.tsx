import React from 'react';
import { SearchFlightAction, SearchFlightState } from '../../@types/store/storeTypes';
import { initialSearchFlight } from '../../mocks/data/mock-provider-data';

export const SearchFlightContext = React.createContext<SearchFlightState>(initialSearchFlight);
export const SearchFlightDispatchContext = React.createContext<React.Dispatch<SearchFlightAction>>(() => {});
