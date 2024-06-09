export type PassengerDataProv = {
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
  buyer: PassengerDataProv;
  passengers: PassengerDataProv[];
};

export type CheckoutFormData = {
  ch_card_holder_name: string;
  ch_card_number: string;
  ch_expiration_date: string;
  ch_cvc: string;
};

export type PaymentData = {
  id: number;
  code: string;
  bookingId: number;
  paymentDate: string;
  totalAmount: number;
  currency: string;
};
