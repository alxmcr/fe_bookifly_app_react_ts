import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';
import { useSearchFlightsByCityFrom } from '../hooks/flights/local/useSearchFlightsByCityFrom';

export default function ResultsFlightsPage() {
  const fromId = 3;
  const toId = 1;
  const departDate = '2024-11-02';
  const { flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom } =
    useSearchFlightsByCityFrom(fromId);
  console.log({ flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom });

  return (
    <div>
      <MainContentResultsFlightsPage fromId={fromId} toId={toId} />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection fromId={fromId} toId={toId} departDate={departDate} />
      </div>
    </div>
  );
}
