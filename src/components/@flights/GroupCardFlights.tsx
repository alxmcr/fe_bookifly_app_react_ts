import { LocalFlightData } from '../../@types/service/serviceTypes';
import CardFlight from './CardFlight';

type Props = {
  flights: LocalFlightData[];
};

export default function GroupCardFlights({ flights = [] }: Props) {
  return (
    <div className="scrollbar-app flex gap-6 overflow-auto p-3">
      {flights.map((flight) => (
        <CardFlight key={flight.flightId} flight={flight} />
      ))}
    </div>
  );
}
