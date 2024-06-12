import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutFormData } from '../../@types/provider/providerTypes';
import { initialCheckoutEmpty } from '../../mocks/data/mock-payments-data';
import { BookingDispatchContext } from '../../@providers/booking/BookingContext';
import { setBookingStatusAction } from '../../store/booking/@actions/actions';

export default function FormPayment() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<CheckoutFormData>(initialCheckoutEmpty);
  const dispatchBooking = React.useContext(BookingDispatchContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    setBookingStatusAction('Confirmed', dispatchBooking);

    navigate('/booking-confirmation');
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label htmlFor="card-holder-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">Card holder name:</span>
        <input
          type="text"
          name="ch_card_holder_name"
          id="card-holder-name"
          placeholder="Enter your card holder name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="card-number" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">Card number:</span>
        <input
          type="text"
          name="ch_card_number"
          id="card-number"
          placeholder="Enter your card number"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label htmlFor="expiration-date" className="flex grow flex-col gap-2">
          <span className="font-nunito text-light-50">Expiration date:</span>
          <input
            type="text"
            name="ch_expiration_date"
            id="expiration-date"
            placeholder="MM/YY"
            className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
            autoComplete="off"
            maxLength={5}
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="cvc" className="flex grow flex-col gap-2">
          <span className="font-nunito text-light-50">CVC:</span>
          <input
            type="number"
            name="ch_cvc"
            id="cvc"
            placeholder="CVC"
            className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
            autoComplete="off"
            maxLength={3}
            max={999}
            required
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit" className="h-[54px] w-full rounded-lg bg-riptide-200 font-bold text-black">
          Checkout
        </button>
      </div>
    </form>
  );
}
