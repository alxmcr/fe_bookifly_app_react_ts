import { useLocalSearchFlights } from '../../../hooks/flights/local/useSearchFlights';

type Props = {
  fromId: number;
  toId: number;
  departDate: string;
};

export default function FlightsSection({ fromId = 0, toId = 0, departDate = '' }: Props) {
  const { flights, statusFlights, errorFlights } = useLocalSearchFlights(fromId, toId, departDate);

  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto h-screen lg:w-[1028px]">
        <div className="flex h-screen flex-col gap-[50px] px-4 md:px-10">
          <h2 className="font-nunito text-[22px] font-extrabold text-light-50">Flights</h2>
        </div>
      </div>
    </section>
  );
}
