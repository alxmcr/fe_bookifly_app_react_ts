import { LocalTemporalPassengerData } from '../service/serviceTypes';

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

// Booking
type SetFlightSelectedAction = {
  type: 'set_flight_selected';
  payload: {
    flightSelectedId: number;
  };
};

type SetNumberOfTicketsAction = {
  type: 'set_number_of_tickets';
  payload: {
    numberOfTickets: number;
  };
};

type SetBookingStatusAction = {
  type: 'set_booking_status';
  payload: {
    bookingStatus: 'Pending' | 'Confirmed' | 'Cancelled';
  };
};

type SetBookingDateAction = {
  type: 'set_booking_date';
  payload: {
    bookingDate: string;
  };
};

type SetBuyerAction = {
  type: 'set_buyer';
  payload: LocalTemporalPassengerData;
};

type AddPassengerAction = {
  type: 'add_passenger';
  payload: {
    passenger: LocalTemporalPassengerData;
  };
};

type RemovePassengerAction = {
  type: 'remove_passenger';
  payload: {
    passenger: LocalTemporalPassengerData;
  };
};

export type BookingState = {
  id: number;
  flightSelectedId: number;
  numberOfTickets: number;
  bookingStatus: 'Pending' | 'Confirmed' | 'Cancelled';
  bookingDate: string;
  buyer: LocalTemporalPassengerData;
  passengers: LocalTemporalPassengerData[];
};

export type BookingAction =
  | SetFlightSelectedAction
  | SetNumberOfTicketsAction
  | SetBookingStatusAction
  | SetBookingDateAction
  | SetBuyerAction
  | AddPassengerAction
  | RemovePassengerAction;
