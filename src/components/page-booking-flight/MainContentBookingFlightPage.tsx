import AppHeader from '../navigation/AppHeader';

type Props = {
  fromId: number;
  toId: number;
};

export default function MainContentBookingFlightPage({ fromId = 0, toId = 0 }: Props) {
  console.log({ fromId, toId });

  return (
    <main className="h-[285px] w-full bg-black md:h-[336px] lg:h-[614px]">
      <AppHeader />
    </main>
  );
}
