import { LocalFlightData } from '../../@types/service/serviceTypes';
import CardFlight from './CardFlight';

type Props = {
  flights: LocalFlightData[];
};

export default function GroupCardFlights({ flights = [] }: Props) {
  return (
    <div className="flex flex-col gap-6 md:w-[664px] md:flex-row md:overflow-auto">
      {flights.map((flight) => (
        <CardFlight key={flight.flightId} flight={flight} />
      ))}
    </div>
  );
}
