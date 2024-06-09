import Icon24x24Passengers from '../../@icons/24x24/Icon24x24Passengers';
import Icon36x36AlarmOutlineRounded from '../../@icons/36x36/Icon36x36AlarmOutlineRounded';
import Icon36x36Calendar from '../../@icons/36x36/Icon36x36Calendar';
import RouteIllustrationDesktop from '../../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../../@illustrations/IllustrationRouteFillMobile';
import BoxCityHeader from '../../@flights/BoxCityHeader';

export default function HeroSectionBookingFlightPage() {
  const fromId = 3;
  const toId = 1;
  const departureDate = '20/05/2024';
  const departureTime = '08:00 AM';
  const price = 1000;
  const totalPassengers = 5;

  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[130px] lg:w-[1028px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 border border-riptide-200 p-4 md:min-w-[320px] md:px-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-riptide-200">
                <Icon36x36Calendar />
                <span className="font-nunito">{departureDate}</span>
              </div>
              <div className="flex items-center gap-2 text-riptide-200">
                <Icon36x36AlarmOutlineRounded />
                <span className="font-nunito">{departureTime}</span>
              </div>
            </div>
            {fromId > 0 && toId > 0 ? (
              <div className="flex items-center justify-between gap-4">
                <BoxCityHeader cityId={fromId} />
                <div className="lg:hidden">
                  <IllustrationRouteFillMobile />
                </div>
                <div className="hidden lg:flex">
                  <RouteIllustrationDesktop />
                </div>
                <BoxCityHeader cityId={toId} />
              </div>
            ) : null}
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-1 rounded-lg border border-riptide-200 p-2">
                <Icon24x24Passengers />
                <span className="font-nunito text-light-50">{totalPassengers} passenger(s)</span>
              </div>
              <div className="flex w-[116px] justify-center rounded-lg bg-light-50 p-2">
                <span className="font-nunito text-light-950">${totalPassengers * price}</span>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}
