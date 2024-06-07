import { SearchFlightAction } from '../../../@types/store/storeTypes';

export const setCityFromAction = (fromId = 0, dispatch: React.Dispatch<SearchFlightAction>) => {
  return dispatch({
    type: 'set_city_from',
    payload: {
      fromId,
    },
  });
};

export const setCityToAction = (toId = 0, dispatch: React.Dispatch<SearchFlightAction>) => {
  return dispatch({
    type: 'set_city_to',
    payload: {
      toId,
    },
  });
};

export const setDepartureDateAction = (departureDate = '', dispatch: React.Dispatch<SearchFlightAction>) => {
  return dispatch({
    type: 'set_departure_date',
    payload: {
      departureDate,
    },
  });
};

export const setTotalPassengersRequiredAction = (
  totalPassengersRequired = 0,
  dispatch: React.Dispatch<SearchFlightAction>,
) => {
  return dispatch({
    type: 'set_total_passengers_required',
    payload: {
      totalPassengersRequired,
    },
  });
};
