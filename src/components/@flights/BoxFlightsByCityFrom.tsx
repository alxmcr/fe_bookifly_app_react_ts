import React from 'react';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';
import { LoadingStates } from '../../@types/service/enumsService';
import { useSearchFlightsByCityFrom } from '../../hooks/flights/local/useSearchFlightsByCityFrom';
import GroupCardFlights from './GroupCardFlights';

export default function BoxFlightsByCityFrom() {
  const flightFound = React.useContext(SearchFlightContext);
  const { flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom } = useSearchFlightsByCityFrom(
    flightFound.fromId,
  );

  if (LoadingStates.PENDING === statusFlightsByCityFrom) {
    return <p>Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlightsByCityFrom && errorFlightsByCityFrom) {
    return <p>{errorFlightsByCityFrom.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlightsByCityFrom && flightsByCityFrom) {
    if (flightsByCityFrom.length === 0) {
      return (
        <div>
          <h3>No flights for this conditions.</h3>
        </div>
      );
    }

    return (
      <div>
        <GroupCardFlights flights={flightsByCityFrom} />
      </div>
    );
  }

  return null;
}
