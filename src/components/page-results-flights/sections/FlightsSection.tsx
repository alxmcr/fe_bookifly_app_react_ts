import BoxGroupCardFlights from '../../flights/BoxGroupCardFlights';

type Props = {
  fromId: number;
  toId: number;
  departDate: string;
};

export default function FlightsSection({ fromId = 0, toId = 0, departDate = '' }: Props) {
  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto h-screen lg:w-[1028px]">
        <div className="flex h-screen flex-col gap-[50px] px-4 md:px-10 lg:px-0">
          <h2 className="font-nunito text-[22px] font-extrabold text-light-50">Flights</h2>
          <BoxGroupCardFlights fromId={fromId} toId={toId} departDate={departDate} />
        </div>
      </div>
    </section>
  );
}
