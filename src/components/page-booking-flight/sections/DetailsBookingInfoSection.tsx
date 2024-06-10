import BoxBookingCheckoutInfo from '../boxes/BoxBookingCheckoutInfo';
import BoxBookingPassengers from '../boxes/BoxBookingPassengers';

export default function DetailsBookingInfoSection() {
  return (
    <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <BoxBookingPassengers />
          <BoxBookingCheckoutInfo />
        </div>
      </div>
    </section>
  );
}
