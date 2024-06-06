import React from 'react';

export const FlightCityFromSearchContext = React.createContext(0);
export const FlightCityToSearchContext = React.createContext(0);
export const FlightDepartureDateContext = React.createContext('');
export const FlightPassengersContext = React.createContext(0);
// Setters
export const SetFlightCityFromSearchContext = React.createContext<
  React.Dispatch<React.SetStateAction<number>>
>(() => {});
export const SetFlightCityToSearchContext = React.createContext<React.Dispatch<React.SetStateAction<number>>>(
  () => {},
);
export const SetFlightDepartureDateContext = React.createContext<
  React.Dispatch<React.SetStateAction<string>>
>(() => {});
export const SetFlightPassengersContext = React.createContext<React.Dispatch<React.SetStateAction<number>>>(
  () => {},
);
