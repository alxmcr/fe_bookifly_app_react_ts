import React from 'react';
import { SearchFlightAction, SearchFlightState } from '../../@types/store/storeTypes';
import { initialSearchFlightState } from '../../mocks/data/mock-provider-data';

export const SearchFlightContext = React.createContext<SearchFlightState>(initialSearchFlightState);
export const SearchFlightDispatchContext = React.createContext<React.Dispatch<SearchFlightAction>>(() => {});
