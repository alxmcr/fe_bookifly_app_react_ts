import React from 'react';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
  FlightDepartureDateContext,
} from '../../../@providers/search/SearchFlightContext';
import BoxGroupCardFlights from '../../flights/BoxGroupCardFlights';

export default function FlightsSection() {
  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);
  const departDate = React.useContext(FlightDepartureDateContext);

  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto h-screen lg:w-[1028px]">
        <div className="flex h-screen flex-col gap-[50px] px-4 md:px-10">
          <h2 className="font-nunito text-[22px] font-extrabold text-light-50">Flights</h2>
          <BoxGroupCardFlights fromId={fromId} toId={toId} departDate={departDate} />
        </div>
      </div>
    </section>
  );
}
