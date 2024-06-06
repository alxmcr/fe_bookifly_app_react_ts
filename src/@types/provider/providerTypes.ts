export type Passenger = {
  id: number;
  code: string;
  name: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
};

export type BookingData = {
  id: number;
  flightSelectedId: number;
  numberOfTickets: number;
  bookingStatus: 'Pending' | 'Confirmed' | 'Cancelled';
  bookingDate: string;
  buyer: Passenger;
  passengers: Passenger[];
};

export type PaymentData = {
  id: number;
  code: string;
  bookingId: number;
  paymentDate: string;
  totalAmount: number;
  currency: string;
};
