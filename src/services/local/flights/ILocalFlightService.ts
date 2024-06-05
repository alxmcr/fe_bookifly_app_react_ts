import { LocalFlightData } from '../../../@types/service/serviceTypes';

export interface ILocalFlightService {
  findById(id: string): Promise<LocalFlightData | null>;
  findAll(): Promise<LocalFlightData[]>;
  findByRoute(from: number, to: number, departDate: string): Promise<LocalFlightData[]>;
}
