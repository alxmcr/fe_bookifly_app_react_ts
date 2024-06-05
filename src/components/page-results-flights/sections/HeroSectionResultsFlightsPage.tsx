import RouteIllustrationDesktop from '../../@illustrations/RouteIllustrationDesktop';
import RouteIllustrationMobile from '../../@illustrations/RouteIllustrationMobile';
import BoxCityHeader from '../../flights/BoxCityHeader';

type Props = {
  fromId: number;
  toId: number;
};

export default function HeroSectionResultsFlightsPage({ fromId = 0, toId = 0 }: Props) {
  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[50px] lg:w-[1028px]">
        {fromId > 0 && toId > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-5 px-4 md:px-10">
            <BoxCityHeader cityId={fromId} />
            <div className="lg:hidden">
              <RouteIllustrationMobile />
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
