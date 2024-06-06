type SetCityFromAction = {
  type: 'set_city_from';
  payload: {
    fromId: number;
  };
};

type SetCityToAction = {
  type: 'set_city_to';
  payload: {
    toId: number;
  };
};

type SetDepartureDate = {
  type: 'set_departure_date';
  payload: {
    departureDate: string;
  };
};

type SetTotalPassengersRequiredAction = {
  type: 'set_total_passengers_required';
  payload: {
    totalPassengersRequired: number;
  };
};

export type SearchFlightState = {
  fromId: number;
  toId: number;
  departureDate: string;
  totalPassengersRequired: number;
};

export type SearchFlightAction =
  | SetCityFromAction
  | SetCityToAction
  | SetDepartureDate
  | SetTotalPassengersRequiredAction;
