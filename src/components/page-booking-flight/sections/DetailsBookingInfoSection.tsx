import { NavLink } from 'react-router-dom';
import Icon24x24ArrowLeft from '../../@icons/24x24/Icon24x24ArrowLeft';
import BoxBookingCheckoutInfo from '../boxes/BoxBookingCheckoutInfo';
import BoxBookingPassengers from '../boxes/BoxBookingPassengers';

export default function DetailsBookingInfoSection() {
  return (
    <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-cover bg-no-repeat px-4 py-10 md:px-4 lg:px-0">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-[26px] font-bold text-riptide-200">Details booking</h2>
            <NavLink
              to="/flights"
              className="flex h-[30px] grow items-center justify-center gap-2 rounded-lg bg-riptide-200 p-8 font-nunito font-semibold text-light-950 md:grow-0"
            >
              <Icon24x24ArrowLeft />
              <span>Return to flights</span>
            </NavLink>
          </div>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <BoxBookingPassengers />
            <BoxBookingCheckoutInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
