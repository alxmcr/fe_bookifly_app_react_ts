import AppHeader from '../navigation/AppHeader';
import HeroSectionBookingFlightPage from '../page-booking-flight/sections/HeroSectionBookingFlightPage';

export default function MainContentBookingConfirmationPage() {
  return (
    <main className="h-[346px] w-full bg-black md:h-[336px] lg:h-[390px]">
      <AppHeader />
      <HeroSectionBookingFlightPage />
    </main>
  );
}
