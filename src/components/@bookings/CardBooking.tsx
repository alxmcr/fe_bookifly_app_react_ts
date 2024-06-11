import { BookingState } from '../../@types/store/storeTypes';
import BoxFlightRoute from '../@flight-route/BoxFlightRoute';

type Props = {
  booking: BookingState;
};

export default function CardBooking({ booking }: Props) {
  if (booking === null || booking === undefined) {
    return null;
  }

  return (
    <article>
      <header></header>
      <div>
        <BoxFlightRoute flightId={String(booking.flightSelectedId)} />
      </div>
      <footer></footer>
    </article>
  );
}
