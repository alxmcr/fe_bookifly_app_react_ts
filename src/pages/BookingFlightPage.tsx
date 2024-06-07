import MainContentBookingFlightPage from '../components/page-booking-flight/MainContentBookingFlightPage';

export default function BookingFlightPage() {
  const fromId = 3;
  const toId = 1;

  return (
    <div>
      <MainContentBookingFlightPage fromId={fromId} toId={toId} />
    </div>
  );
}
