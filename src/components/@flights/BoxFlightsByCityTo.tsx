import React from 'react';
import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalSearchFlightsComplete } from '../../hooks/flights/local/useSearchFlightsComplete';
import GroupCardFlights from './GroupCardFlights';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';

export default function BoxFlightsByCityTo() {
  const flightFound = React.useContext(SearchFlightContext);
  const { flights, statusFlights, errorFlights } = useLocalSearchFlightsComplete(
    flightFound.fromId,
    flightFound.toId,
    flightFound.departureDate,
  );

  if (LoadingStates.PENDING === statusFlights) {
    return <p>Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlights && errorFlights) {
    return <p>{errorFlights.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlights && flights) {
    return (
      <div>
        <GroupCardFlights flights={flights} />
      </div>
    );
  }

  return null;
}
