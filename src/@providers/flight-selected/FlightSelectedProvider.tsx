import React from 'react';
import { FlightSelectedData } from '../../@types/provider/providerTypes';
import { FlightSelectedContext, SetFlightSelectedContext } from './FlightSelectedContext';
import { initialFlightSelected } from '../../mocks/data/mock-provider-data';

type Props = {
  children: React.ReactNode;
};

export default function FlightSelectedProvider({ children }: Props) {
  const [flightSelected, setFlightSelected] = React.useState<FlightSelectedData>(initialFlightSelected);

  return (
    <FlightSelectedContext.Provider value={flightSelected}>
      <SetFlightSelectedContext.Provider value={setFlightSelected}>
        {children}
      </SetFlightSelectedContext.Provider>
    </FlightSelectedContext.Provider>
  );
}
