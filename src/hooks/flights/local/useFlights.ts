import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useLocalFlights = () => {
  const [flights, setFlights] = React.useState<LocalFlightData[]>([]);
  const [errorFlights, setErrorFlights] = React.useState<Error | null>(null);
  const [statusFlights, setStatusFlights] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setStatusFlights(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const results = await service.findAll();

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
  }, []);

  return { flights, statusFlights, errorFlights };
};
