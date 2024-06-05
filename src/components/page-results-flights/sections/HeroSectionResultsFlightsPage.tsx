import BoxCityHeader from '../../flights/BoxCityHeader';

type Props = {
  fromId: number;
  toId: number;
};

export default function HeroSectionResultsFlightsPage({ fromId = 0, toId = 0 }: Props) {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto h-[188px] lg:w-[1028px]">
        <div className="px-4 md:px-10">
          <BoxCityHeader cityId={fromId} />
          <BoxCityHeader cityId={toId} />
        </div>
      </div>
    </section>
  );
}
