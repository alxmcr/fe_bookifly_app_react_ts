import { BookingData, PassengerDataProv } from '../../@types/provider/providerTypes';
import { LocalTemporalPassengerData } from '../../@types/service/serviceTypes';
import { BookingState, SearchFlightState } from '../../@types/store/storeTypes';

export const initialTemporalPassenger: LocalTemporalPassengerData = {
  pa_temporal_id: 0,
  pa_firstName: '',
  pa_lastName: '',
  pa_email: '',
  pa_phoneNumber: '',
};

export const initialSearchFlightState: SearchFlightState = {
  fromId: 0,
  toId: 0,
  departureDate: '',
  totalPassengersRequired: 0,
};

export const initialBookingState: BookingState = {
  id: 0,
  flightSelectedId: 0,
  numberOfTickets: 0,
  bookingStatus: 'Pending',
  bookingDate: '',
  buyer: initialTemporalPassenger,
  passengers: [],
};

export const initialPassenger: PassengerDataProv = {
  id: 0,
  code: '',
  name: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};

export const initialBooking: BookingData = {
  id: 0,
  flightSelectedId: 0,
  numberOfTickets: 0,
  bookingStatus: 'Pending',
  bookingDate: '',
  buyer: initialPassenger,
  passengers: [],
};
