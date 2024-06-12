import SectionMsgBookingConfirmation from '../components/page-booking-confirmation/sections/SectionMsgBookingConfirmation';
import MainContentBookingFlightPage from '../components/page-booking-flight/MainContentBookingFlightPage';

export default function BookingConfirmationPage() {
  return (
    <div>
      <MainContentBookingFlightPage />
      <SectionMsgBookingConfirmation />
    </div>
  );
}
