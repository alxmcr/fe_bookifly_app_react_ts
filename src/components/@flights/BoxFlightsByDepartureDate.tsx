import React from 'react';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';
import { LoadingStates } from '../../@types/service/enumsService';
import { useSearchFlightsByDepartureDate } from '../../hooks/flights/local/useSearchFlightsByDepartureDate';
import GroupCardFlights from './GroupCardFlights';

export default function BoxFlightsByDepartureDate() {
  const flightFound = React.useContext(SearchFlightContext);
  const { flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate } =
    useSearchFlightsByDepartureDate(flightFound.departureDate);

  if (LoadingStates.PENDING === statusFlightsByDepartureDate) {
    return <p>Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlightsByDepartureDate && errorFlightsByDepartureDate) {
    return <p>{errorFlightsByDepartureDate.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlightsByDepartureDate && flightsByDepartureDate) {
    return (
      <div>
        <GroupCardFlights flights={flightsByDepartureDate} />
      </div>
    );
  }

  return null;
}
