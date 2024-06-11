import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalFlight } from '../../hooks/flights/local/useFlight';
import BoxCityHeader from '../@cities/BoxCityHeader';
import IllustrationRouteFillDesktop from '../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../@illustrations/IllustrationRouteFillMobile';

type Props = {
  flightId: string;
};

export default function BoxFlightRoute({ flightId = '' }: Props) {
  const { flight, errorFlight, statusFlight } = useLocalFlight(flightId);

  if (LoadingStates.PENDING === statusFlight) {
    return <p>Loading Flight...</p>;
  }

  if (LoadingStates.ERROR === statusFlight && errorFlight) {
    return <p>{errorFlight.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlight && flight) {
    return (
      <div className="flex items-center justify-between gap-4">
        <BoxCityHeader cityId={flight.flight_from.cityId} />
        <div className="lg:hidden">
          <IllustrationRouteFillMobile />
        </div>
        <div className="hidden lg:flex">
          <IllustrationRouteFillDesktop />
        </div>
        <BoxCityHeader cityId={flight.flight_to.cityId} />
      </div>
    );
  }

  return null;
}
