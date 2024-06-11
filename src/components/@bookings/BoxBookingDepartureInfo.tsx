import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalFlight } from '../../hooks/flights/local/useFlight';
import Icon36x36AlarmOutlineRounded from '../@icons/36x36/Icon36x36AlarmOutlineRounded';
import Icon36x36Calendar from '../@icons/36x36/Icon36x36Calendar';

type Props = {
  flightId: string;
};

export default function BoxBookingDepartureInfo({ flightId }: Props) {
  const { flight, errorFlight, statusFlight } = useLocalFlight(flightId);

  if (LoadingStates.PENDING === statusFlight) {
    return <p>Loading Flight...</p>;
  }

  if (LoadingStates.ERROR === statusFlight && errorFlight) {
    return <p>{errorFlight.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlight && flight) {
    return (
      <>
        <div className="flex items-center gap-2 text-riptide-200">
          <Icon36x36Calendar />
          <span className="font-nunito">{flight.departureDate}</span>
        </div>
        <div className="flex items-center gap-2 text-riptide-200">
          <Icon36x36AlarmOutlineRounded />
          <span className="font-nunito">{flight.departure}</span>
        </div>
      </>
    );
  }

  return null;
}
