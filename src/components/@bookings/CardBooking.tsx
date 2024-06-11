import { BookingState } from '../../@types/store/storeTypes';
import BoxFlightRoute from '../@flight-route/BoxFlightRoute';
import BoxBookingDepartureInfo from './BoxBookingDepartureInfo';
import BoxBookingDetailsPrice from './BoxBookingDetailsPrice';

type Props = {
  booking: BookingState;
};

export default function CardBooking({ booking }: Props) {
  if (booking === null || booking === undefined) {
    return null;
  }

  return (
    <article>
      <header>
        <BoxBookingDepartureInfo flightId={String(booking.flightSelectedId)} />
      </header>
      <div>
        <BoxFlightRoute flightId={String(booking.flightSelectedId)} />
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
