import { NavLink } from 'react-router-dom';
import Icon180x180CircleWavyCheckFill from '../../@icons/180x180/Icon180x180CircleWavyCheckFill';
import Icon24x24ArrowLeft from '../../@icons/24x24/Icon24x24ArrowLeft';

export default function SectionMsgBookingConfirmation() {
  return (
    <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-cover bg-no-repeat px-4 py-10 md:px-4 lg:px-0">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <Icon180x180CircleWavyCheckFill />
          <h2 className="text-[40px] font-bold text-light-50">Booking confirmed!</h2>
          <NavLink
            to="/"
            className="flex h-[40px] items-center gap-3 rounded-lg bg-riptide-200 p-8 text-light-950"
          >
            <Icon24x24ArrowLeft />
            <span>Return to home</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
