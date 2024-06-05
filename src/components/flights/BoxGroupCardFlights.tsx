import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalSearchFlights } from '../../hooks/flights/local/useSearchFlights';
import GroupCardFlights from './GroupCardFlights';

type Props = {
  fromId: number;
  toId: number;
  departDate: string;
};

export default function BoxGroupCardFlights({ fromId = 0, toId = 0, departDate = '' }: Props) {
  const { flights, statusFlights, errorFlights } = useLocalSearchFlights(fromId, toId, departDate);

  if (LoadingStates.PENDING === statusFlights) {
    return <p>Loading...</p>;
  }

  if (LoadingStates.ERROR === statusFlights && errorFlights) {
    return <p>Loading...</p>;
  }

  if (LoadingStates.SUCCESS === statusFlights && flights) {
    return (
      <div>
        <GroupCardFlights flights={flights} />
      </div>
    );
  }

  return null;
}
