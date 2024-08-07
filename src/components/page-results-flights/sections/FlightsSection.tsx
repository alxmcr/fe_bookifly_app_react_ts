import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FlightsSection({ title = '', children }: Props) {
  return (
    <section className="w-full bg-[url('/assets/images/bg-main-bookifly.png')] bg-no-repeat py-10">
      <div className="mx-auto lg:w-[1028px]">
        <div className="flex flex-col gap-[50px] px-4 md:px-10 lg:px-0">
          <h2 className="font-nunito text-[22px] font-extrabold text-riptide-200 md:text-[32px]">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
