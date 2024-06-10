import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalSearchFlightsComplete } from '../../hooks/flights/local/useSearchFlightsComplete';
import GroupCardFlights from './GroupCardFlights';

type Props = {
  fromId: number;
  toId: number;
  departDate: string;
};

export default function BoxGroupCardFlights({ fromId = 0, toId = 0, departDate = '' }: Props) {
  const { flights, statusFlights, errorFlights } = useLocalSearchFlightsComplete(fromId, toId, departDate);

  if (LoadingStates.PENDING === statusFlights) {
    return <p>Loading flights...</p>;
  }

  if (LoadingStates.ERROR === statusFlights && errorFlights) {
    return <p>{errorFlights.message}</p>;
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
