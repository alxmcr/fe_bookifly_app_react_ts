import { BookingState } from '../../@types/store/storeTypes';
import CardBooking from './CardBooking';

type Props = {
  booking: BookingState;
};

export default function BoxCardBooking({ booking }: Props) {
  if (booking === null || booking === undefined) {
    return null;
  }

  return (
    <div>
      <CardBooking booking={booking} />
    </div>
  );
}
