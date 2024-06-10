import BoxFormPayment from '../../@payment/BoxFormPayment';

export default function BoxBookingCheckoutInfo() {
  return (
    <div className="flex h-screen flex-col gap-[50px] rounded-lg bg-black px-4 py-2 md:px-10 lg:px-0">
      <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">Payment information</h2>
      <BoxFormPayment />
    </div>
  );
}
