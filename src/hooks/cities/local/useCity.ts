import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalCityData } from '../../../@types/service/serviceTypes';
import { LocalCityServiceImpl } from '../../../services/local/cities/LocalCityServiceImpl';

export const useLocalCity = (id = '0') => {
  const [city, setCity] = React.useState<LocalCityData | null>(null);
  const [errorCity, setErrorCity] = React.useState<Error | null>(null);
  const [statusCity, setStatusCity] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        setStatusCity(LoadingStates.PENDING);

        const service = new LocalCityServiceImpl();
        const result = await service.findById(id);

        setCity(result);
        setStatusCity(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusCity(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorCity(null);
        } else if (error instanceof Error) {
          setErrorCity(error);
        }
      }
    };

    // Fetch
    fetchCity();
  }, [id]);

  return { city, statusCity, errorCity };
};
