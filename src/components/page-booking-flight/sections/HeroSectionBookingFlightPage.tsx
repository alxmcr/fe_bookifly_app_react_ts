import RouteIllustrationDesktop from '../../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../../@illustrations/IllustrationRouteFillMobile';
import BoxCityHeader from '../../flights/BoxCityHeader';

export default function HeroSectionBookingFlightPage() {
  const fromId = 3;
  const toId = 1;

  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[50px] lg:w-[1028px]">
        {fromId > 0 && toId > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-5 px-4 md:px-10">
            <BoxCityHeader cityId={fromId} />
            <div className="md:hidden lg:hidden">
              <IllustrationRouteFillMobile />
            </div>
            <div className="hidden md:flex">
              <RouteIllustrationDesktop />
            </div>
            <BoxCityHeader cityId={toId} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
