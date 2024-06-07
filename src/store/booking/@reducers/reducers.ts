import { BookingAction, BookingState } from '../../../@types/store/storeTypes';

export default function bookingReducers(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'set_flight_selected': {
      return { ...state, flightSelectedId: action.payload.flightSelectedId };
    }

    case 'set_booking_date': {
      return { ...state, bookingDate: action.payload.bookingDate };
    }

    case 'set_booking_status': {
      return { ...state, bookingStatus: action.payload.bookingStatus };
    }

    case 'set_buyer': {
      return { ...state, buyer: action.payload.buyer };
    }

    case 'set_number_of_tickets': {
      return { ...state, numberOfTickets: action.payload.numberOfTickets };
    }

    case 'add_passenger': {
      return { ...state, passengers: [...state.passengers, action.payload.passenger] };
    }

    case 'remove_passenger': {
      return {
        ...state,
        passengers: state.passengers.filter(
          (pa) => pa.pa_temporal_id !== action.payload.passenger.pa_temporal_id,
        ),
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
