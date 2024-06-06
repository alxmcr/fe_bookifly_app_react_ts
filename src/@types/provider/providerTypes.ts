export type PassengerData = {
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
  buyer: PassengerData;
  passengers: PassengerData[];
};

export type PaymentData = {
  id: number;
  code: string;
  bookingId: number;
  paymentDate: string;
  totalAmount: number;
  currency: string;
};
