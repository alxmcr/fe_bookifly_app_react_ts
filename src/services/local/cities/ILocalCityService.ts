import { LocalCityData } from '../../../@types/service/serviceTypes';

export interface ILocalCityService {
  findAll(): Promise<LocalCityData[]>;
  findById(id: string): Promise<LocalCityData | null>;
}
