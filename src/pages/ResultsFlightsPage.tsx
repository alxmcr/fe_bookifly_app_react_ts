import React from 'react';
import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import DetailsFlightsSection from '../components/page-results-flights/sections/DetailsFlightsSection';
import { SearchFlightContext } from '../@providers/search-flight/SearchFlightContext';
import { NavLink } from 'react-router-dom';
import Icon24x24ArrowLeft from '../components/@icons/24x24/Icon24x24ArrowLeft';
import AppHeader from '../components/navigation/AppHeader';

export default function ResultsFlightsPage() {
  const flightFound = React.useContext(SearchFlightContext);

  if (flightFound.fromId === 0 || flightFound.toId === 0) {
    return (
      <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-cover bg-no-repeat px-4 py-10 md:px-4 lg:px-0">
        <div className="mx-auto lg:w-[1028px]">
          <AppHeader />
          <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h2 className="text-center text-[40px] font-bold text-light-50">
              I'm so sorry. You did not provide information about flight requirements on your search.
            </h2>
            <NavLink
              to="/"
              className="flex h-[40px] items-center gap-3 rounded-lg border border-riptide-200 p-8 text-riptide-200"
            >
              <Icon24x24ArrowLeft />
              <span>Return to home</span>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <MainContentResultsFlightsPage />
      <DetailsFlightsSection />
    </div>
  );
}
