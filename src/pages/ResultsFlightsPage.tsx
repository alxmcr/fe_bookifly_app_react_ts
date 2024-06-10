import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';
import { useSearchFlightsByCityFrom } from '../hooks/flights/local/useSearchFlightsByCityFrom';
import { useSearchFlightsByCityTo } from '../hooks/flights/local/useSearchFlightsByCityTo';

export default function ResultsFlightsPage() {
  const fromId = 3;
  const toId = 1;
  const departDate = '2024-11-02';
  const { flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom } =
    useSearchFlightsByCityFrom(fromId);
  const { flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo } = useSearchFlightsByCityTo(toId);
  console.log({ flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom });
  console.log({ flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo });

  return (
    <div>
      <MainContentResultsFlightsPage fromId={fromId} toId={toId} />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection fromId={fromId} toId={toId} departDate={departDate} />
      </div>
    </div>
  );
}
