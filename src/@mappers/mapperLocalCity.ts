import { LocalModelCityData } from '../@types/service/modelTypes';
import { LocalCityData } from '../@types/service/serviceTypes';

export const mapperLocalModelCityToCityData = (modelCity: LocalModelCityData) => {
  const city: LocalCityData = {
    ...modelCity.fields,
  };

  return city;
};

export const mapperLocalListModelCityToListCityData = (listModelCity: LocalModelCityData[]) => {
  return listModelCity.map((modelCity) => mapperLocalModelCityToCityData(modelCity));
};
