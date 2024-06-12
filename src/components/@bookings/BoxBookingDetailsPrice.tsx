import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalFlight } from '../../hooks/flights/local/useFlight';
import Icon24x24Passengers from '../@icons/24x24/Icon24x24Passengers';

type Props = {
  flightId: string;
  numberOfTickets: number;
};

export default function BoxBookingDetailsPrice({ flightId = '', numberOfTickets = 0 }: Props) {
  const { flight, errorFlight, statusFlight } = useLocalFlight(flightId);

  if (LoadingStates.PENDING === statusFlight) {
    return <p>Loading Flight...</p>;
  }

  if (LoadingStates.ERROR === statusFlight && errorFlight) {
    return <p>{errorFlight.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlight && flight) {
    return (
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1 rounded-lg border border-riptide-200 p-2">
          <Icon24x24Passengers />
          <span className="font-nunito text-light-50">{numberOfTickets} passenger(s)</span>
        </div>
        <div className="flex w-[116px] justify-center rounded-lg bg-light-50 p-2">
          <span className="font-nunito text-light-950">${numberOfTickets * flight.priceAmount}</span>
        </div>
      </div>
    );
  }

  return null;
}
