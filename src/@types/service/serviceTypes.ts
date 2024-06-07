export type LocalCityData = {
  cityId: number;
  name: string;
  country: string;
  abbrev: string;
  abbrevCountry: string;
};

export type LocalFlightData = {
  flightId: number;
  date: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  flight_from: LocalCityData;
  flight_to: LocalCityData;
};

export type LocalTemporalPassengerData = {
  pa_temporal_id: number;
  pa_name: string;
  pa_lastName: string;
  pa_email?: string;
  pa_phoneNumber?: string;
};
