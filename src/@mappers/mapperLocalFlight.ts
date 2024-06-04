import { LocalModelFlightData } from '../@types/service/modelTypes';
import { LocalFlightData } from '../@types/service/serviceTypes';

export const mapperLocalModelFlightToFlightData = (modelFlight: LocalModelFlightData) => {
  const flight: LocalFlightData = {
    ...modelFlight.fields,
  };

  return flight;
};

export const mapperLocalListModelFlightToListFlightData = (listModelFlight: LocalModelFlightData[]) => {
  return listModelFlight.map((modelFlight) => mapperLocalModelFlightToFlightData(modelFlight));
};
