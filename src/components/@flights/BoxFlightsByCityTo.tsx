import React from 'react';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';
import { LoadingStates } from '../../@types/service/enumsService';
import { useSearchFlightsByCityTo } from '../../hooks/flights/local/useSearchFlightsByCityTo';
import GroupCardFlights from './GroupCardFlights';

export default function BoxFlightsByCityTo() {
  const flightFound = React.useContext(SearchFlightContext);
  const { flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo } = useSearchFlightsByCityTo(
    flightFound.toId,
  );

  if (LoadingStates.PENDING === statusFlightsByCityTo) {
    return <p className="text-riptide-200">Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlightsByCityTo && errorFlightsByCityTo) {
    return <p className="text-riptide-200">{errorFlightsByCityTo.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlightsByCityTo && flightsByCityTo) {
    if (flightsByCityTo.length === 0) {
      return (
        <div>
          <h3 className="text-[25px] text-light-50">No flights for this conditions.</h3>
        </div>
      );
    }

    return (
      <div>
        <GroupCardFlights flights={flightsByCityTo} />
      </div>
    );
  }

  return null;
}
