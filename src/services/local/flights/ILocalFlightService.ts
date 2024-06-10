import { LocalFlightData } from '../../../@types/service/serviceTypes';

export interface ILocalFlightService {
  findById(id: string): Promise<LocalFlightData | null>;
  findAll(): Promise<LocalFlightData[]>;
  findByRoute(fromId: number, toId: number, departureDate: string): Promise<LocalFlightData[]>;
  findByCityFrom(fromId: number): Promise<LocalFlightData[]>;
  findByCityTo(toId: number): Promise<LocalFlightData[]>;
  findByDepartureDate(departureDate: string): Promise<LocalFlightData[]>;
}
