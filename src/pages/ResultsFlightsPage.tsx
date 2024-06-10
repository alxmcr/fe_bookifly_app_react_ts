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
      <div className="h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat">
        <FlightsSection title="Flighs">
          <BoxFlightsByAllConditions />
        </FlightsSection>
        <FlightsSection title="Flighs by city from">
          <BoxFlightsByCityFrom />
        </FlightsSection>
        <FlightsSection title="Flighs by city to">
          <BoxFlightsByCityTo />
        </FlightsSection>
        <FlightsSection title="Flighs by departure date">
          <BoxFlightsByDepartureDate />
        </FlightsSection>
      </div>
    </div>
  );
}
