import BoxFormSearchFlight from '../boxes/BoxFormSearchFlight';

export default function HeroSection() {
  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto h-screen lg:w-[1028px]">
        <div className="flex h-screen flex-col justify-center gap-[50px] px-4 md:items-center md:px-10">
          <h1 className="w-[240px] text-[28px] font-black text-light-50 md:w-[396px] md:text-center md:text-[44px] md:leading-[4rem] lg:w-[650px] lg:text-[64px]">
            Where would you like to go?
          </h1>
          <BoxFormSearchFlight />
        </div>
      </div>
    </section>
  );
}
