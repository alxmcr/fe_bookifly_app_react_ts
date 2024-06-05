import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
  FlightDepartureDateContext,
  FlightPassengersContext,
} from '../@providers/search/SearchFlightContext';

export default function ResultsFlightsPage() {
  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);
  const departureDate = React.useContext(FlightDepartureDateContext);
  const passengers = React.useContext(FlightPassengersContext);

  return (
    <main>
      <div>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/flight/1">Flight Page #1</NavLink>
        <NavLink to="/flight/2">Flight Page #2</NavLink>
        <NavLink to="/flights">Flights page</NavLink>
        <NavLink to="/booking-confirmation">Booking confirmation page</NavLink>
      </div>
      <h1>Flight Page</h1>
      <pre>
        {JSON.stringify(
          {
            fromId,
            toId,
            departureDate,
            passengers,
          },
          null,
          2,
        )}
      </pre>
    </main>
  );
}
