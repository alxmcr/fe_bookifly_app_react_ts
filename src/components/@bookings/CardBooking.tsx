import { LoadingStates } from '../../@types/service/enumsService';
import { BookingState } from '../../@types/store/storeTypes';
import { useLocalFlight } from '../../hooks/flights/local/useFlight';
import BoxFlightRoute from '../@flight-route/BoxFlightRoute';
import BoxBookingDepartureInfo from './BoxBookingDepartureInfo';
import BoxBookingDetailsPrice from './BoxBookingDetailsPrice';

type Props = {
  booking: BookingState;
};

export default function CardBooking({ booking }: Props) {
  const { flight, errorFlight, statusFlight } = useLocalFlight(String(booking?.flightSelectedId));

  if (LoadingStates.PENDING === statusFlight) {
    return <p>Loading Flight...</p>;
  }

  if (LoadingStates.ERROR === statusFlight && errorFlight) {
    return <p>{errorFlight.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusFlight && flight) {
    return (
      <article className="flex flex-col gap-3">
        <header>
          <BoxBookingDepartureInfo flight={flight} />
        </header>
        <div>
          <BoxFlightRoute flight={flight} />
        </div>
        <footer>
          <BoxBookingDetailsPrice
            flightId={String(booking.flightSelectedId)}
            numberOfTickets={booking.numberOfTickets}
          />
        </footer>
      </article>
    );
  }

  return null;
}
