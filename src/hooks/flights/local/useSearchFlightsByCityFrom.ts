import React from 'react';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useSearchFlightsByCityFrom = (from = 0) => {
  const [flightsByCityFrom, setFlightsByCityFrom] = React.useState<LocalFlightData[]>([]);
  const [errorFlightsByCityFrom, setErrorFlightsByCityFrom] = React.useState<Error | null>(null);
  const [statusFlightsByCityFrom, setStatusFlightsByCityFrom] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchFlights = async () => {
      try {
        setStatusFlightsByCityFrom(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const results = await service.findByCityFrom(from);

        setFlightsByCityFrom(results);
        setStatusFlightsByCityFrom(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusFlightsByCityFrom(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorFlightsByCityFrom(null);
        } else if (error instanceof Error) {
          setErrorFlightsByCityFrom(error);
        }
      }
    };

    // Fetch
    fetchFlights();
  }, [from]);

  return { flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom };
};
