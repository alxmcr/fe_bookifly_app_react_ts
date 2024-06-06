import { BookingData, PassengerData } from '../../@types/provider/providerTypes';

export const initialPassenger: PassengerData = {
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
