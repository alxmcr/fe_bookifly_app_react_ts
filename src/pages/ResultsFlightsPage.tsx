import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';
import { useSearchFlightsByCityFrom } from '../hooks/flights/local/useSearchFlightsByCityFrom';
import { useSearchFlightsByCityTo } from '../hooks/flights/local/useSearchFlightsByCityTo';
import { useSearchFlightsByDepartureDate } from '../hooks/flights/local/useSearchFlightsByDepartureDate';

export default function ResultsFlightsPage() {
  const fromId = 3;
  const toId = 1;
  const departureDate = '2024-11-02';
  const { flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom } =
    useSearchFlightsByCityFrom(fromId);
  const { flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo } = useSearchFlightsByCityTo(toId);
  const { flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate } =
    useSearchFlightsByDepartureDate(departureDate);
  console.log({ flightsByCityFrom, statusFlightsByCityFrom, errorFlightsByCityFrom });
  console.log({ flightsByCityTo, statusFlightsByCityTo, errorFlightsByCityTo });
  console.log({ flightsByDepartureDate, statusFlightsByDepartureDate, errorFlightsByDepartureDate });

  return (
    <div>
      <MainContentResultsFlightsPage fromId={fromId} toId={toId} />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection fromId={fromId} toId={toId} departDate={departureDate} />
      </div>
    </div>
  );
}
