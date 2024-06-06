import React from 'react';
import { FlightSelectedData } from '../../@types/provider/providerTypes';
import { initialFlightSelected } from '../../mocks/data/mock-provider-data';

export const FlightSelectedContext = React.createContext<FlightSelectedData>(initialFlightSelected);

export const SetFlightSelectedContext = React.createContext<
  React.Dispatch<React.SetStateAction<FlightSelectedData>>
>(() => {});
