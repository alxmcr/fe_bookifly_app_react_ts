import React from 'react';
import { BookingContext, BookingDispatchContext } from '../../@providers/booking/BookingContext';
import { updatePassengerAction } from '../../store/booking/@actions/actions';

type Props = {
  indexPassenger: number;
};

export default function FormPassenger({ indexPassenger = 0 }: Props) {
  const [firstName, setFirstName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const booking = React.useContext(BookingContext);
  const dispatchBooking = React.useContext(BookingDispatchContext);

  const handleFirstName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(ev.target.value);

    if (indexPassenger >= 0 && indexPassenger < booking.passengers.length) {
      const passengerToUpdate = booking.passengers[indexPassenger];

      if (passengerToUpdate !== undefined) {
        updatePassengerAction(
          indexPassenger,
          { ...passengerToUpdate, pa_firstName: ev.target.value },
          dispatchBooking,
        );
      }
    }
  };

  const handleLastname = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(ev.target.value);

    if (indexPassenger >= 0 && indexPassenger < booking.passengers.length) {
      const passengerToUpdate = booking.passengers[indexPassenger];

      if (passengerToUpdate !== undefined) {
        updatePassengerAction(
          indexPassenger,
          { ...passengerToUpdate, pa_lastName: ev.target.value },
          dispatchBooking,
        );
      }
    }
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label htmlFor="first-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">First name:</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter your first name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
          onChange={handleFirstName}
          value={firstName}
        />
      </label>
      <label htmlFor="last-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">Last name:</span>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter your last name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
          onChange={handleLastname}
          value={lastname}
        />
      </label>
    </form>
  );
}
