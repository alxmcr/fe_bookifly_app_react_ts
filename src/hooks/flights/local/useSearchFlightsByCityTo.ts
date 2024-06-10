import React from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useSearchFlightsByCityTo = (to = 0) => {
  const [flightsByCityTo, setFlightsByCityTo] = React.useState<LocalFlightData[]>([]);
  const [errorFlightsByCityTo, setErrorFlightsByCityTo] = React.useState<Error | null>(null);
  const [statusFlightsByCityTo, setStatusFlightsByCityTo] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchFlights = async () => {
      try {
        setStatusFlightsByCityTo(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const results = await service.findByCityTo(to);

        setFlightsByCityTo(results);
        setStatusFlightsByCityTo(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusFlightsByCityTo(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorFlightsByCityTo(null);
        } else if (error instanceof Error) {
          setErrorFlightsByCityTo(error);
        }
      }
    };

    // Fetch
    fetchFlights();
  }, [to]);

  return { flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo };
};
