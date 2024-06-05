import { LocalFlightData } from '../../@types/service/serviceTypes';
import Icon24x24CircleMinus from '../@icons/24x24/Icon24x24CircleMinus';
import Icon24x24CirclePlus from '../@icons/24x24/Icon24x24CirclePlus';
import Icon24x24MultiSelectFill from '../@icons/24x24/Icon24x24MultiSelectFill';

type Props = {
  flight: LocalFlightData;
  passengers: number;
  setPassengers: React.Dispatch<React.SetStateAction<number>>;
};

export default function CardFlight({ flight, passengers = 0, setPassengers }: Props) {
  const handleAddPassengers = () => {
    console.log('handleAddPassengers');
    setPassengers((prePass) => prePass + 1);
  };

  const handleMinusPassengers = () => {
    console.log('handleMinusPassengers');

    if (passengers - 1 > 0) {
      setPassengers((prePass) => prePass - 1);
    }
  };

  return (
    <article>
      <header></header>
      <div>
        <div className="flex flex-col gap-2">
          <span className="text-riptide-200">Price by passenger</span>
          <span>${flight.price}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-riptide-200">Total of passengers</span>
          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              onClick={handleMinusPassengers}
              disabled={passengers - 1 === 0}
              className="text-riptide-200 disabled:text-riptide-800"
            >
              <Icon24x24CircleMinus />
            </button>
            <input
              type="number"
              name="passengers"
              id="passengers"
              className="h-[40px] w-[154px] grow rounded-lg p-2 text-center disabled:bg-light-400 lg:w-[106px]"
              value={passengers}
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
      <footer>
        <div className="flex flex-col gap-2">
          <span className="text-riptide-200">Total all passengers</span>
          <div className="bg-light-50 text-light-950">${flight.price * passengers}</div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-riptide-200 text-light-950">
            <span>Select</span>
            <Icon24x24MultiSelectFill />
          </button>
        </div>
      </footer>
    </article>
  );
}
