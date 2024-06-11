import BoxFlightsByAllConditions from '../components/@flights/BoxFlightsByAllConditions';
import BoxFlightsByCityFrom from '../components/@flights/BoxFlightsByCityFrom';
import BoxFlightsByCityTo from '../components/@flights/BoxFlightsByCityTo';
import BoxFlightsByDepartureDate from '../components/@flights/BoxFlightsByDepartureDate';
import MainContentResultsFlightsPage from '../components/page-results-flights/MainContentResultsFlightsPage';
import FlightsSection from '../components/page-results-flights/sections/FlightsSection';

export default function ResultsFlightsPage() {
  return (
    <div>
      <MainContentResultsFlightsPage />
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-cover bg-no-repeat">
        <FlightsSection title="Flights">
          <BoxFlightsByAllConditions />
        </FlightsSection>
        <FlightsSection title="Flights by city from">
          <BoxFlightsByCityFrom />
        </FlightsSection>
        <FlightsSection title="Flights by city to">
          <BoxFlightsByCityTo />
        </FlightsSection>
        <FlightsSection title="Flights by departure date">
          <BoxFlightsByDepartureDate />
        </FlightsSection>
      </div>
    </div>
  );
}
