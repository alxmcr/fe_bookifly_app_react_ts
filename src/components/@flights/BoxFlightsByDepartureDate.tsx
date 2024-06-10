import React from 'react';
import { SearchFlightContext } from '../../@providers/search-flight/SearchFlightContext';
import { LoadingStates } from '../../@types/service/enumsService';
import { useSearchFlightsByDepartureDate } from '../../hooks/flights/local/useSearchFlightsByDepartureDate';
import GroupCardFlights from './GroupCardFlights';

export default function BoxFlightsByDepartureDate() {
  const flightFound = React.useContext(SearchFlightContext);
  const { flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate } =
    useSearchFlightsByDepartureDate(flightFound.departureDate);
  console.log(
    '🚀 ~ BoxFlightsByDepartureDate ~ flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate:',
    {
      flightsByDepartureDate,
      statusFlightsByDepartureDate,
      errorFlightsByDepartureDate,
    },
  );

  if (LoadingStates.PENDING === statusFlightsByDepartureDate) {
    return <p>Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlightsByDepartureDate && errorFlightsByDepartureDate) {
    return <p>{errorFlightsByDepartureDate.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlightsByDepartureDate && flightsByDepartureDate) {
    if (flightsByDepartureDate.length === 0) {
      return (
        <div>
          <h3>No flights for this conditions.</h3>
        </div>
      );
    }

    return (
      <div>
        <GroupCardFlights flights={flightsByDepartureDate} />
      </div>
    );
  }

  return null;
}
