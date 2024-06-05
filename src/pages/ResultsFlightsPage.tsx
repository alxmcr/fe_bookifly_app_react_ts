import React from 'react';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
} from '../@providers/search/SearchFlightContext';
import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';

export default function ResultsFlightsPage() {
  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);

  return (
    <div>
      <MainContentResultsFlightsPage fromId={fromId} toId={toId} />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection fromId={fromId} toId={toId} departDate="" />
      </div>
    </div>
  );
}
