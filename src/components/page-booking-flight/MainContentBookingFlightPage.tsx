import AppHeader from '../navigation/AppHeader';
import HeroSectionBookingFlightPage from './sections/HeroSectionBookingFlightPage';

export default function MainContentBookingFlightPage() {
  return (
    <main className="h-[285px] w-full bg-black md:h-[336px] lg:h-[614px]">
      <AppHeader />
      <HeroSectionBookingFlightPage />
    </main>
  );
}
