import { LocalFlightData } from '../../@types/service/serviceTypes';
import CardFlight from './CardFlight';

type Props = {
  flights: LocalFlightData[];
};

export default function GroupCardFlights({ flights = [] }: Props) {
  return (
    <div>
      {flights.map((flight) => (
        <CardFlight flight={flight} />
      ))}
    </div>
  );
}
