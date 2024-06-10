import React from 'react';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useSearchFlightsByCityFrom = (from = 0) => {
  const [flights, setFlights] = React.useState<LocalFlightData[]>([]);
  const [errorFlights, setErrorFlights] = React.useState<Error | null>(null);
  const [statusFlights, setStatusFlights] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchFlights = async () => {
      try {
        setStatusFlights(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const results = await service.findByCityFrom(from);

        setFlights(results);
        setStatusFlights(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusFlights(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorFlights(null);
        } else if (error instanceof Error) {
          setErrorFlights(error);
        }
      }
    };

    // Fetch
    fetchFlights();
  }, [from]);

  return { flights, statusFlights, errorFlights };
};
