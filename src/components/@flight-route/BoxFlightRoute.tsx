import { LocalFlightData } from '../../@types/service/serviceTypes';
import BoxCityHeader from '../@cities/BoxCityHeader';
import IllustrationRouteFillDesktop from '../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../@illustrations/IllustrationRouteFillMobile';

type Props = {
  flight: LocalFlightData;
};

export default function BoxFlightRoute({ flight }: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      <BoxCityHeader cityId={flight.city_departure_from.cityId} />
      <div className="lg:hidden">
        <IllustrationRouteFillMobile />
      </div>
      <div className="hidden lg:flex">
        <IllustrationRouteFillDesktop />
      </div>
      <BoxCityHeader cityId={flight.city_destination_to.cityId} />
    </div>
  );
}
