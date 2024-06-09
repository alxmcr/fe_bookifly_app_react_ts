import MainContentBookingFlightPage from '../components/page-booking-flight/MainContentBookingFlightPage';
import PassengersSection from '../components/page-booking-flight/sections/PassengersSection';
import PaymentInfoSection from '../components/page-booking-flight/sections/PaymentInfoSection';

export default function BookingFlightPage() {
  return (
    <div>
      <MainContentBookingFlightPage />
      <PassengersSection />
      <PaymentInfoSection />
    </div>
  );
}
