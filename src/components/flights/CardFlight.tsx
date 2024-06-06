import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SetFlightPassengersContext } from '../../@providers/search-flight/SearchFlightContext';
import { LocalFlightData } from '../../@types/service/serviceTypes';
import Icon24x24CircleMinus from '../@icons/24x24/Icon24x24CircleMinus';
import Icon24x24CirclePlus from '../@icons/24x24/Icon24x24CirclePlus';
import Icon24x24MultiSelectFill from '../@icons/24x24/Icon24x24MultiSelectFill';
import RouteIllustrationMobile from '../@illustrations/RouteIllustrationMobile';

type Props = {
  flight: LocalFlightData;
};

export default function CardFlight({ flight }: Props) {
  const navigate = useNavigate();
  const setPassengers = React.useContext(SetFlightPassengersContext);
  const [totalPassengers, setTotalPassengers] = React.useState(0);

  const handleAddPassengers = () => {
    setTotalPassengers((prePass) => prePass + 1);
  };

  const handleMinusPassengers = () => {
    if (totalPassengers - 1 > 0) {
      setTotalPassengers((prePass) => prePass - 1);
    }
  };

  const handleSelectFlight = () => {
    console.log('selected', { flight, passengers: totalPassengers });
    setPassengers(totalPassengers);
    navigate(`/flight/${flight.flightId}`);
  };

  return (
    <article className="flex flex-col gap-2 rounded-lg border border-riptide-200 p-2 md:w-[288px]">
      <header className="flex justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-nunito text-[18px] font-bold text-riptide-200">
            {flight.flight_from.abbrev}
          </span>
          <span className="font-nunito text-[1rem] text-light-50">{flight.departure}</span>
        </div>
        <div>
          <RouteIllustrationMobile />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-nunito text-[18px] font-bold text-riptide-200">
            {flight.flight_to.abbrev}
          </span>
          <span className="font-nunito text-light-50">{flight.arrival}</span>
        </div>
      </header>
      <div className="flex justify-between border-t border-riptide-200 pt-4">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[14px] text-riptide-200">Price by passenger</span>
          <span className="h-[40px] font-nunito text-[1rem] font-bold text-light-50">${flight.price}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[14px] text-riptide-200">Total of passengers</span>
          <div className="flex gap-[12px]">
            <button
              type="button"
              onClick={handleMinusPassengers}
              disabled={totalPassengers - 1 === 0}
              className="text-riptide-200 disabled:text-riptide-800"
            >
              <Icon24x24CircleMinus />
            </button>
            <input
              type="number"
              name="passengers"
              id="passengers"
              className="h-[40px] max-w-[50px] grow rounded-lg p-2 text-center disabled:bg-light-400 lg:w-[106px]"
              value={totalPassengers}
              required
              disabled
            />
            <button
              type="button"
              onClick={handleAddPassengers}
              className="text-riptide-200 disabled:text-riptide-800"
            >
              <Icon24x24CirclePlus />
            </button>
          </div>
        </div>
      </div>
      <footer className="flex items-end justify-between">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-riptide-200">Total all passengers</span>
          <div className="flex h-[40px] w-[154px] items-center justify-center rounded-lg bg-light-50">
            <span className="font-nunito font-bold text-light-950">${flight.price * totalPassengers}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex h-[40px] w-[108px] items-center justify-center gap-3 rounded-lg bg-riptide-200 text-light-950"
            onClick={handleSelectFlight}
          >
            <span className="font-nunito font-bold">Select</span>
            <Icon24x24MultiSelectFill />
          </button>
        </div>
      </footer>
    </article>
  );
}
