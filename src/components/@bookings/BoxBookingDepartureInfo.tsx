import { LocalFlightData } from '../../@types/service/serviceTypes';
import Icon36x36AlarmOutlineRounded from '../@icons/36x36/Icon36x36AlarmOutlineRounded';
import Icon36x36Calendar from '../@icons/36x36/Icon36x36Calendar';

type Props = {
  flight: LocalFlightData;
};

export default function BoxBookingDepartureInfo({ flight }: Props) {
  return (
    <>
      <div className="flex items-center gap-2 text-riptide-200">
        <Icon36x36Calendar />
        <span className="font-nunito">{flight.departureDate}</span>
      </div>
      <div className="flex items-center gap-2 text-riptide-200">
        <Icon36x36AlarmOutlineRounded />
        <span className="font-nunito">{flight.departureTime}</span>
      </div>
    </>
  );
}
