import {
    mapperLocalListModelCityToListCityData,
    mapperLocalModelCityToCityData,
} from '../../../@mappers/mapperLocalCity';
import { LocalModelCityData } from '../../../@types/service/modelTypes';
import { LocalCityData } from '../../../@types/service/serviceTypes';
import mockLocalCity001 from '../../../mocks/data/local/cities/mock-local-city-001.json';
import mockLocalCity002 from '../../../mocks/data/local/cities/mock-local-city-002.json';
import mockLocalCity003 from '../../../mocks/data/local/cities/mock-local-city-003.json';
import mockLocalCity004 from '../../../mocks/data/local/cities/mock-local-city-004.json';
import mockLocalCity005 from '../../../mocks/data/local/cities/mock-local-city-005.json';
import mockLocalCity006 from '../../../mocks/data/local/cities/mock-local-city-006.json';
import mockLocalCity007 from '../../../mocks/data/local/cities/mock-local-city-007.json';
import mockLocalCity008 from '../../../mocks/data/local/cities/mock-local-city-008.json';
import mockLocalCity009 from '../../../mocks/data/local/cities/mock-local-city-009.json';
import mockLocalCity010 from '../../../mocks/data/local/cities/mock-local-city-010.json';
import mockLocalModalListCities from '../../../mocks/data/local/mock-local-cities.json';
import { ILocalCityService } from './ILocalCityService';

export class LocalCityServiceImpl implements ILocalCityService {
  findAll(): Promise<LocalCityData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const cities = mapperLocalListModelCityToListCityData(
            mockLocalModalListCities as LocalModelCityData[],
          );

          resolve(cities);
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
  findById(id = ''): Promise<LocalCityData | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          switch (id) {
            case '1':
              resolve(mapperLocalModelCityToCityData(mockLocalCity001 as LocalModelCityData));
              break;
            case '2':
              resolve(mapperLocalModelCityToCityData(mockLocalCity002 as LocalModelCityData));
              break;
            case '3':
              resolve(mapperLocalModelCityToCityData(mockLocalCity003 as LocalModelCityData));
              break;
            case '4':
              resolve(mapperLocalModelCityToCityData(mockLocalCity004 as LocalModelCityData));
              break;
            case '5':
              resolve(mapperLocalModelCityToCityData(mockLocalCity005 as LocalModelCityData));
              break;
            case '6':
              resolve(mapperLocalModelCityToCityData(mockLocalCity006 as LocalModelCityData));
              break;
            case '7':
              resolve(mapperLocalModelCityToCityData(mockLocalCity007 as LocalModelCityData));
              break;
            case '8':
              resolve(mapperLocalModelCityToCityData(mockLocalCity008 as LocalModelCityData));
              break;
            case '9':
              resolve(mapperLocalModelCityToCityData(mockLocalCity009 as LocalModelCityData));
              break;
            case '10':
              resolve(mapperLocalModelCityToCityData(mockLocalCity010 as LocalModelCityData));
              break;
          }
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  }
}
