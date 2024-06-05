import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';

export default function ResultsFlightsPage() {
  const fromId = 3;
  const toId = 2;
  const departDate = '2024-11-02';

  return (
    <div>
      <MainContentResultsFlightsPage fromId={fromId} toId={toId} />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection fromId={fromId} toId={toId} departDate={departDate} />
      </div>
    </div>
  );
}
