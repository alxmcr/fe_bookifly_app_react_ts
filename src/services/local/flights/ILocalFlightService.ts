import { LocalCityData, LocalFlightData } from '../../../@types/service/serviceTypes';

export interface ILocalFlightService {
  findById(id: string): Promise<LocalFlightData | null>;
  findAll(): Promise<LocalFlightData[]>;
  findByRoute(from: LocalCityData, to: LocalCityData, departDate: Date): Promise<LocalFlightData[]>;
}
