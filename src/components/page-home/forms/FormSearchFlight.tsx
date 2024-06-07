import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchFlightState } from '../../../@types/store/storeTypes';
import { initialSearchFlightState } from '../../../mocks/data/mock-provider-data';
import Icon24x24Search from '../../@icons/24x24/Icon24x24Search';
import Icon40x40CircleMinus from '../../@icons/40x40/Icon40x40CircleMinus';
import Icon40x40CirclePlus from '../../@icons/40x40/Icon40x40CirclePlus';
import SelectCities from '../selects/SelectCities';

export default function FormSearchFlight() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<SearchFlightState>(initialSearchFlightState);

  const handleAddPassengers = () => {
    setFormData((prevData) => ({
      ...prevData,
      totalPassengersRequired: prevData.totalPassengersRequired + 1,
    }));
  };

  const handleMinusPassengers = () => {
    if (formData.totalPassengersRequired - 1 > 0) {
      setFormData((prevData) => ({
        ...prevData,
        totalPassengersRequired: prevData.totalPassengersRequired - 1,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    navigate('/flights');
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-2">
        <label htmlFor="flight-from" className="font-semibold text-light-50">
          From:
        </label>
        <SelectCities
          defaultOptionLabel="Select a city from"
          nameSelectElement="fromId"
          htmlFor="flight-from"
          onChange={handleInputChange}
          citySelectedId={String(formData.fromId)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="flight-to" className="font-semibold text-light-50">
          To:
        </label>
        <SelectCities
          defaultOptionLabel="Select a city to"
          nameSelectElement="toId"
          htmlFor="flight-to"
          onChange={handleInputChange}
          citySelectedId={String(formData.toId)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="departure-date" className="font-semibold text-light-50">
          Departure:
        </label>
        <div>
          <input
            type="date"
            name="departureDate"
            id="departure-date"
            className="h-[40px] w-full rounded-lg p-2"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="passengers" className="font-semibold text-light-50">
          Passengers:
        </label>
        <div className="flex items-center gap-[12px]">
          <button
            type="button"
            onClick={handleMinusPassengers}
            disabled={formData.totalPassengersRequired - 1 === 0}
            className="text-riptide-200 disabled:text-riptide-800"
          >
            <Icon40x40CircleMinus />
          </button>
          <input
            type="number"
            name="totalPassengersRequired"
            id="passengers"
            className="h-[40px] w-[154px] grow rounded-lg p-2 text-center disabled:bg-light-400 lg:w-[106px]"
            value={formData.totalPassengersRequired}
            required
            disabled
          />
          <button
            type="button"
            onClick={handleAddPassengers}
            className="text-riptide-200 disabled:text-riptide-800"
          >
            <Icon40x40CirclePlus />
          </button>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex h-[54px] w-full items-center justify-center gap-2 rounded-lg bg-riptide-200 font-semibold uppercase text-light-950 hover:bg-light-950 hover:text-light-50 lg:size-[56px]"
        >
          <span className="lg:hidden">Search</span>
          <Icon24x24Search />
        </button>
      </div>
    </form>
  );
}
