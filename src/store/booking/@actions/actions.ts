import { LocalTemporalPassengerData } from '../../../@types/service/serviceTypes';
import { BookingAction } from '../../../@types/store/storeTypes';

export const setFlightSelectedAction = (flightSelectedId = 0, dispatch: React.Dispatch<BookingAction>) => {
  dispatch({
    type: 'set_flight_selected',
    payload: {
      flightSelectedId,
    },
  });
};

export const setNumberOfTicketsAction = (numberOfTickets = 0, dispatch: React.Dispatch<BookingAction>) => {
  dispatch({
    type: 'set_number_of_tickets',
    payload: {
      numberOfTickets,
    },
  });
};

export const setBookingStatusAction = (
  bookingStatus: 'Pending' | 'Confirmed' | 'Cancelled',
  dispatch: React.Dispatch<BookingAction>,
) => {
  dispatch({
    type: 'set_booking_status',
    payload: {
      bookingStatus,
    },
  });
};

export const setBookingDateAction = (bookingDate = '', dispatch: React.Dispatch<BookingAction>) => {
  dispatch({
    type: 'set_booking_date',
    payload: {
      bookingDate,
    },
  });
};

export const setBuyerAction = (
  buyer: LocalTemporalPassengerData,
  dispatch: React.Dispatch<BookingAction>,
) => {
  dispatch({
    type: 'set_buyer',
    payload: {
      buyer,
    },
  });
};

export const addPassengerAction = (
  passenger: LocalTemporalPassengerData,
  dispatch: React.Dispatch<BookingAction>,
) => {
  dispatch({
    type: 'add_passenger',
    payload: {
      passenger,
    },
  });
};

export const removePassengerAction = (
  passenger: LocalTemporalPassengerData,
  dispatch: React.Dispatch<BookingAction>,
) => {
  dispatch({
    type: 'remove_passenger',
    payload: {
      passenger,
    },
  });
};

export const clearPassengersAction = (dispatch: React.Dispatch<BookingAction>) => {
  dispatch({ type: 'clear_passengers' });
};
