import AppHeader from '../navigation/AppHeader';
import HeroSectionResultsFlightsPage from './sections/HeroSectionResultsFlightsPage';

type Props = {
  fromId: number;
  toId: number;
};

export default function MainContentResultsFlightsPage({ fromId = 0, toId = 0 }: Props) {
  return (
    <main>
      <AppHeader />
      <HeroSectionResultsFlightsPage fromId={fromId} toId={toId} />
    </main>
  );
}
