import { LocalCityData } from '../service/serviceTypes';

export type FlightSelectedData = {
  flightId: number;
  date: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  flight_from: LocalCityData;
  flight_to: LocalCityData;
};
