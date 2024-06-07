import { SearchFlightAction, SearchFlightState } from '../../../@types/store/storeTypes';

export default function searchFlightReducers(state: SearchFlightState, action: SearchFlightAction):SearchFlightState {
  switch (action.type) {
    case 'set_city_from': {
      return { ...state, fromId: action.payload.fromId };
    }

    case 'set_city_to': {
      return { ...state, toId: action.payload.toId };
    }

    case 'set_departure_date': {
      return { ...state, departureDate: action.payload.departureDate };
    }

    case 'set_total_passengers_required': {
      return { ...state, totalPassengersRequired: action.payload.totalPassengersRequired };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
