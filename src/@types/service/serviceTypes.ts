export interface LocalCityData {
  cityId: number;
  name: string;
  country: string;
}

export interface LocalFlightData {
  flightId: number;
  date: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  flight_from: LocalCityData;
  flight_to: LocalCityData;
}
