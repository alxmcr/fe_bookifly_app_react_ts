import React from 'react';
import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalSearchFlightsComplete } from '../../hooks/flights/local/useSearchFlightsComplete';
import GroupCardFlights from './GroupCardFlights';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';

export default function BoxFlightsByAllConditions() {
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
    if (flights.length === 0) {
      return (
        <div>
          <h3 className="text-[25px] text-light-50">No flights for this conditions.</h3>
        </div>
      );
    }

    return (
      <div>
        <GroupCardFlights flights={flights} />
      </div>
    );
  }

  return null;
}
