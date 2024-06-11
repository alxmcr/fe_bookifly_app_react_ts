import RouteIllustrationDesktop from '../../@illustrations/IllustrationRouteFillDesktop';
import IllustrationRouteFillMobile from '../../@illustrations/IllustrationRouteFillMobile';
import BoxCityHeader from '../../@cities/BoxCityHeader';
import { SearchFlightContext } from '../../../@providers/search-flight/SearchFlightContext';
import React from 'react';

export default function HeroSectionResultsFlightsPage() {
  const flightFound = React.useContext(SearchFlightContext);

  return (
    <section className="w-full bg-black py-[100px]">
      <div className="mx-auto h-[50px] lg:w-[1028px]">
        {flightFound.fromId > 0 && flightFound.toId > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-5 px-4 md:px-10">
            <BoxCityHeader cityId={flightFound.fromId} />
            <div className="md:hidden lg:hidden">
              <IllustrationRouteFillMobile />
            </div>
            <div className="hidden md:flex">
              <RouteIllustrationDesktop />
            </div>
            <BoxCityHeader cityId={flightFound.toId} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
