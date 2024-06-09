import BoxFormPayment from '../../@payment/BoxFormPayment';

export default function PaymentInfoSection() {
  return (
    <section className="min-h-screen w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex h-screen flex-col gap-[50px] px-4 md:px-10 lg:px-0">
          <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200">Payment information</h2>
          <BoxFormPayment />
        </div>
      </div>
    </section>
  );
}
