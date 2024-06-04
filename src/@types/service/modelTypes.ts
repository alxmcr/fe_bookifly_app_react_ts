import { LocalCityData, LocalFlightData } from './serviceTypes';

export type LocalModelCityData = {
  model: string;
  pk: number;
  fields: LocalCityData;
};

export type LocalModelFlightData = {
  model: string;
  pk: number;
  fields: LocalFlightData;
};
