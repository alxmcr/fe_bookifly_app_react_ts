import React from 'react';
import AppHeader from '../navigation/AppHeader';
import HeroSectionResultsFlightsPage from './sections/HeroSectionResultsFlightsPage';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
} from '../../@providers/search/SearchFlightContext';

export default function MainContentResultsFlightsPage() {
  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);

  return (
    <main>
      <AppHeader />
      <HeroSectionResultsFlightsPage fromId={fromId} toId={toId} />
    </main>
  );
}
