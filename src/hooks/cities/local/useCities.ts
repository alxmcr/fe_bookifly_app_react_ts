import React, { useEffect } from 'react';
import { LoadingStates } from '../../../@types/service/enumsService';
import { LocalCityData } from '../../../@types/service/serviceTypes';
import { LocalCityServiceImpl } from '../../../services/local/cities/LocalCityServiceImpl';

export const useLocalCities = () => {
  const [cities, setCities] = React.useState<LocalCityData[]>([]);
  const [errorCities, setErrorCities] = React.useState<Error | null>(null);
  const [statusCities, setStatusCities] = React.useState(LoadingStates.IDLE);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setStatusCities(LoadingStates.PENDING);

        const service = new LocalCityServiceImpl();
        const results = await service.findAll();

        setCities(results);
        setStatusCities(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusCities(LoadingStates.ERROR);
        if (error instanceof Error && error.name === 'AbortError') {
          setErrorCities(null);
        } else if (error instanceof Error) {
          setErrorCities(error);
        }
      }
    };

    // Fetch
    fetchCities();
  }, []);

  return { cities, statusCities, errorCities };
};
