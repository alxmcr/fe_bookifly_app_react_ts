import { BookingData, PassengerDataProv } from '../../@types/provider/providerTypes';
import { SearchFlightState } from '../../@types/store/storeTypes';

export const initialSearchFlight: SearchFlightState = {
  fromId: 0,
  toId: 0,
  departureDate: '',
  totalPassengersRequired: 0,
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
