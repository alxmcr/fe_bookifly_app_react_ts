import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import { LocalFlightServiceImpl } from '../../../services/local/flights/LocalFlightServiceImpl';

export const useLocalFlight = (id = '0') => {
  console.log('🚀 ~ useLocalFlight ~ id:', id);
  const [flight, setFlight] = React.useState<LocalFlightData | null>(null);
  const [errorFlight, setErrorFlight] = React.useState<Error | null>(null);
  const [statusFlight, setStatusFlight] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        setStatusFlight(LoadingStates.PENDING);

        const service = new LocalFlightServiceImpl();
        const result = await service.findById(id);
        console.log('🚀 ~ fetchFlight ~ result:', result);

        setFlight(result);
        setStatusFlight(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusFlight(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorFlight(null);
        } else if (error instanceof Error) {
          setErrorFlight(error);
        }
      }
    };

    // Fetch
    fetchFlight();
  }, [id]);

  return { flight, statusFlight, errorFlight };
};
