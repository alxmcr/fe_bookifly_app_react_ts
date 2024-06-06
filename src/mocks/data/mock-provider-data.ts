import { FlightSelectedData } from '../../@types/provider/providerTypes';

export const initialFlightSelected: FlightSelectedData = {
  flightId: 0,
  date: '',
  departure: '',
  arrival: '',
  duration: '',
  price: 0,
  flight_from: {
    cityId: 0,
    name: '',
    country: '',
    abbrev: '',
    abbrevCountry: '',
  },
  flight_to: {
    cityId: 0,
    name: '',
    country: '',
    abbrev: '',
    abbrevCountry: '',
  },
};
