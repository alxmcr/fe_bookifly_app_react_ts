import React from 'react';
import Icon40x40CircleMinus from '../../@icons/40x40/Icon40x40CircleMinus';
import Icon40x40CirclePlus from '../../@icons/40x40/Icon40x40CirclePlus';
import SelectCities from '../selects/SelectCities';
import Icon24x24Search from '../../@icons/24x24/Icon24x24Search';
import {
  FlightCityFromSearchContext,
  FlightCityToSearchContext,
  FlightDepartureDateContext,
  FlightPassengersContext,
  SetFlightCityFromSearchContext,
  SetFlightCityToSearchContext,
  SetFlightDepartureDateContext,
  SetFlightPassengersContext,
} from '../../../@providers/search-flight/SearchFlightContext';
import { useNavigate } from 'react-router-dom';

export default function FormSearchFlight() {
  const navigate = useNavigate();

  const fromId = React.useContext(FlightCityFromSearchContext);
  const toId = React.useContext(FlightCityToSearchContext);
  const departureDate = React.useContext(FlightDepartureDateContext);
  const passengers = React.useContext(FlightPassengersContext);
  const setFromId = React.useContext(SetFlightCityFromSearchContext);
  const setToId = React.useContext(SetFlightCityToSearchContext);
  const setDepartureDate = React.useContext(SetFlightDepartureDateContext);
  const setPassengers = React.useContext(SetFlightPassengersContext);

  const handleFromId = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setFromId(Number(ev.target.value));
  };

  const handleToId = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setToId(Number(ev.target.value));
  };

  const handleDepartureDate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(ev.target.value);
  };

  const handleAddPassengers = () => {
    setPassengers((prePass) => prePass + 1);
  };

  const handleMinusPassengers = () => {
    if (passengers - 1 > 0) {
      setPassengers((prePass) => prePass - 1);
    }
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
          nameSelectElement="city-from"
          htmlFor="flight-from"
          onChange={handleFromId}
          citySelectedId={String(fromId)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="flight-to" className="font-semibold text-light-50">
          To:
        </label>
        <SelectCities
          defaultOptionLabel="Select a city to"
          nameSelectElement="city-to"
          htmlFor="flight-to"
          onChange={handleToId}
          citySelectedId={String(toId)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="departure-date" className="font-semibold text-light-50">
          Departure:
        </label>
        <div>
          <input
            type="date"
            name="departure-date"
            id="departure-date"
            className="h-[40px] w-full rounded-lg p-2"
            value={departureDate}
            onChange={handleDepartureDate}
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
            disabled={passengers - 1 === 0}
            className="text-riptide-200 disabled:text-riptide-800"
          >
            <Icon40x40CircleMinus />
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
