import BoxCityHeader from '../@cities/BoxCityHeader';
import IllustrationRouteFillDesktop from '../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../@illustrations/IllustrationRouteFillMobile';

type Props = {
  fromId: number;
  toId: number;
};

export default function BoxFlightRoute({ fromId = 0, toId = 0 }: Props) {
  if (fromId <= 0) {
    return null;
  }

  if (toId <= 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <BoxCityHeader cityId={fromId} />
      <div className="lg:hidden">
        <IllustrationRouteFillMobile />
      </div>
      <div className="hidden lg:flex">
        <IllustrationRouteFillDesktop />
      </div>
      <BoxCityHeader cityId={toId} />
    </div>
  );
}
