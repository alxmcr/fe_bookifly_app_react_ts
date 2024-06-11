import BoxFormPayment from '../../@payment/BoxFormPayment';

export default function BoxBookingCheckoutInfo() {
  return (
    <div className="flex flex-col gap-[50px] rounded-2xl bg-black px-4 py-7 md:px-10">
      <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">Payment information</h2>
      <BoxFormPayment />
    </div>
  );
}
