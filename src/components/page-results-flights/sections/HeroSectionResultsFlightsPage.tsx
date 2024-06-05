import BoxCityHeader from '../../flights/BoxCityHeader';

type Props = {
  fromId: number;
  toId: number;
};

export default function HeroSectionResultsFlightsPage({ fromId = 0, toId = 0 }: Props) {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto h-[188px] lg:w-[1028px]">
        <div className="flex flex-wrap justify-between px-4 md:px-10">
          <BoxCityHeader cityId={2} />
          <BoxCityHeader cityId={3} />
        </div>
      </div>
    </section>
  );
}
