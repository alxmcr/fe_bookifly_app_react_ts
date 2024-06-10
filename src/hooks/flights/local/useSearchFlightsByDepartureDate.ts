import React from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useSearchFlightsByDepartureDate = (departureDate = '') => {
  const [flightsByDepartureDate, setFlightsByDepartureDate] = React.useState<LocalFlightData[]>([]);
  const [errorFlightsByDepartureDate, setErrorFlightsByDepartureDate] = React.useState<Error | null>(null);
  const [statusFlightsByDepartureDate, setStatusFlightsByDepartureDate] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchFlights = async () => {
      try {
        setStatusFlightsByDepartureDate(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const results = await service.findByDepartureDate(departureDate);

        setFlightsByDepartureDate(results);
        setStatusFlightsByDepartureDate(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusFlightsByDepartureDate(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorFlightsByDepartureDate(null);
        } else if (error instanceof Error) {
          setErrorFlightsByDepartureDate(error);
        }
      }
    };

    // Fetch
    fetchFlights();
  }, [departureDate]);

  return { flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate };
};
