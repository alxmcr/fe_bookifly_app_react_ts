import Icon36x36AlarmOutlineRounded from '../../@icons/36x36/Icon36x36AlarmOutlineRounded';
import Icon36x36Calendar from '../../@icons/36x36/Icon36x36Calendar';
import RouteIllustrationDesktop from '../../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../../@illustrations/IllustrationRouteFillMobile';
import BoxCityHeader from '../../flights/BoxCityHeader';

export default function HeroSectionBookingFlightPage() {
  const fromId = 3;
  const toId = 1;

  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[50px] lg:w-[1028px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 border border-riptide-200 p-4 md:min-w-[320px] md:px-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-riptide-200">
                <Icon36x36Calendar />
                <span className="font-nunito">08/06/2024</span>
              </div>
              <div className="flex items-center gap-2 text-riptide-200">
                <Icon36x36AlarmOutlineRounded />
                <span className="font-nunito">08/06/2024</span>
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
          </div>{' '}
        </div>
      </div>
    </section>
  );
}
