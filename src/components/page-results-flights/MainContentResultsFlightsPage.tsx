import React from 'react';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
} from '../../@providers/search/SearchFlightContext';
import AppHeader from '../navigation/AppHeader';
import FlightsSection from './sections/FlightsSection';
import HeroSectionResultsFlightsPage from './sections/HeroSectionResultsFlightsPage';

export default function MainContentResultsFlightsPage() {
  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);

  return (
    <main>
      <AppHeader />
      <HeroSectionResultsFlightsPage fromId={3} toId={2} />
      <FlightsSection />
    </main>
  );
}
