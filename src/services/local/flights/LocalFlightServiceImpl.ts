import {
  mapperLocalListModelFlightToListFlightData,
  mapperLocalModelFlightToFlightData,
} from '../../../@mappers/mapperLocalFlight';
import { LocalModelFlightData } from '../../../@types/service/modelTypes';
import { LocalFlightData } from '../../../@types/service/serviceTypes';
import mockLocalFlight001 from '../../../mocks/data/local/flights/mock-local-flight-001.json';
import mockLocalFlight002 from '../../../mocks/data/local/flights/mock-local-flight-002.json';
import mockLocalFlight003 from '../../../mocks/data/local/flights/mock-local-flight-003.json';
import mockLocalFlight004 from '../../../mocks/data/local/flights/mock-local-flight-004.json';
import mockLocalFlight005 from '../../../mocks/data/local/flights/mock-local-flight-005.json';
import mockLocalFlight006 from '../../../mocks/data/local/flights/mock-local-flight-006.json';
import mockLocalFlight007 from '../../../mocks/data/local/flights/mock-local-flight-007.json';
import mockLocalFlight008 from '../../../mocks/data/local/flights/mock-local-flight-008.json';
import mockLocalFlight009 from '../../../mocks/data/local/flights/mock-local-flight-009.json';
import mockLocalFlight010 from '../../../mocks/data/local/flights/mock-local-flight-010.json';
import mockLocalModalListFlights from '../../../mocks/data/local/mock-local-flights.json';
import { ILocalFlightService } from './ILocalFlightService';

export class LocalFlightServiceImpl implements ILocalFlightService {
  findByRoute(fromId = 0, toId = 0, departDate = ''): Promise<LocalFlightData[]> {
    if (fromId === null || fromId === undefined) {
      throw new Error('From is invalid');
    }

    if (toId === null || toId === undefined) {
      throw new Error('To is invalid');
    }

    if (departDate === null || departDate === undefined) {
      throw new Error('Depart date is invalid');
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const flights: LocalFlightData[] = mapperLocalListModelFlightToListFlightData(
            mockLocalModalListFlights as LocalModelFlightData[],
          );

          const filter = flights.filter((flight) => {
            const conditionByFrom = flight.city_departure_from.cityId === fromId;
            const conditionByTo = flight.city_destination_to.cityId === toId;
            const conditionByDate =
              new Date(flight.departureDate).getTime() === new Date(departDate).getTime();

            const conditionFilter = conditionByFrom && conditionByTo && conditionByDate;

            return conditionFilter;
          });

          resolve(filter);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  findByCityFrom(fromId = 0): Promise<LocalFlightData[]> {
    if (fromId === null || fromId === undefined) {
      throw new Error('From is invalid');
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const flights: LocalFlightData[] = mapperLocalListModelFlightToListFlightData(
            mockLocalModalListFlights as LocalModelFlightData[],
          );

          const filter = flights.filter((flight) => {
            const conditionFilter = flight.city_departure_from.cityId === fromId;

            return conditionFilter;
          });

          resolve(filter);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  findByCityTo(toId = 0): Promise<LocalFlightData[]> {
    if (toId === null || toId === undefined) {
      throw new Error('From is invalid');
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const flights: LocalFlightData[] = mapperLocalListModelFlightToListFlightData(
            mockLocalModalListFlights as LocalModelFlightData[],
          );

          const filter = flights.filter((flight) => {
            const conditionFilter = flight.city_destination_to.cityId === toId;

            return conditionFilter;
          });

          resolve(filter);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  findByDepartureDate(departureDate = ''): Promise<LocalFlightData[]> {
    if (departureDate === null || departureDate === undefined) {
      throw new Error('Departure date is invalid');
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const flights: LocalFlightData[] = mapperLocalListModelFlightToListFlightData(
            mockLocalModalListFlights as LocalModelFlightData[],
          );

          const filter = flights.filter((flight) => {
            const conditionFilter =
              new Date(flight.departureDate).getTime() === new Date(departureDate).getTime();

            return conditionFilter;
          });

          resolve(filter);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }

  findAll(): Promise<LocalFlightData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const flights = mapperLocalListModelFlightToListFlightData(
            mockLocalModalListFlights as LocalModelFlightData[],
          );

          resolve(flights);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
  findById(id: string): Promise<LocalFlightData | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          switch (id) {
            case '1':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight001 as LocalModelFlightData));
              break;
            case '2':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight002 as LocalModelFlightData));
              break;
            case '3':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight003 as LocalModelFlightData));
              break;
            case '4':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight004 as LocalModelFlightData));
              break;
            case '5':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight005 as LocalModelFlightData));
              break;
            case '6':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight006 as LocalModelFlightData));
              break;
            case '7':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight007 as LocalModelFlightData));
              break;
            case '8':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight008 as LocalModelFlightData));
              break;
            case '9':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight009 as LocalModelFlightData));
              break;
            case '10':
              resolve(mapperLocalModelFlightToFlightData(mockLocalFlight010 as LocalModelFlightData));
              break;
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
