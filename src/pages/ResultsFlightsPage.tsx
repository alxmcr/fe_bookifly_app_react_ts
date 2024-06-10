import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';

export default function ResultsFlightsPage() {
  return (
    <div>
      <MainContentResultsFlightsPage />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection />
      </div>
    </div>
  );
}
