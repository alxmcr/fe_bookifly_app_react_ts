import React from 'react';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
  FlightDepartureDateContext,
  FlightPassengersContext,
  SetFlightCityFromSearchContext,
  SetFlightCityToSearchContext,
  SetFlightDepartureDateContext,
  SetFlightPassengersContext,
} from './SearchFlightContext';

type Props = {
  children: React.ReactNode;
};

export default function SearchFlightProvider({ children }: Props) {
  const [fromId, setFromId] = React.useState('');
  const [toId, setToId] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState('');
  const [passengers, setPassengers] = React.useState(1);

  return (
    <FlightCityFromSearchContext.Provider value={fromId}>
      <FlightCityToSearchContext.Provider value={toId}>
        <FlightDepartureDateContext.Provider value={departureDate}>
          <FlightPassengersContext.Provider value={passengers}>
            <SetFlightCityFromSearchContext.Provider value={setFromId}>
              <SetFlightCityToSearchContext.Provider value={setToId}>
                <SetFlightDepartureDateContext.Provider value={setDepartureDate}>
                  <SetFlightPassengersContext.Provider value={setPassengers}>
                    {children}
                  </SetFlightPassengersContext.Provider>
                </SetFlightDepartureDateContext.Provider>
              </SetFlightCityToSearchContext.Provider>
            </SetFlightCityFromSearchContext.Provider>
          </FlightPassengersContext.Provider>
        </FlightDepartureDateContext.Provider>
      </FlightCityToSearchContext.Provider>
    </FlightCityFromSearchContext.Provider>
  );
}
