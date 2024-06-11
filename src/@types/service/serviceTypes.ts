export type LocalCityData = {
  cityId: number;
  name: string;
  country: string;
  abbrev: string;
  abbrevCountry: string;
};

export type LocalFlightData = {
  flightId: number;
  departureDate: string;
  departureTime: string;
  arrival: string;
  durationInMinutesInMinutes: number;
  priceAmount: number;
  priceCurrency: string;
  city_departure_from: LocalCityData;
  city_destination_to: LocalCityData;
};

export type LocalTemporalPassengerData = {
  pa_temporal_id: number;
  pa_firstName: string;
  pa_lastName: string;
  pa_email?: string;
  pa_phoneNumber?: string;
};
