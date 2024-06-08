import { RouteObject } from 'react-router-dom';
import BookingConfirmationPage from '../pages/BookingConfirmationPage';
import BookingFlightPage from '../pages/BookingFlightPage';
import HomePage from '../pages/HomePage';
import ResultsFlightsPage from '../pages/ResultsFlightsPage';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'results-page',
    path: '/flights',
    element: <ResultsFlightsPage />,
  },
  {
    id: 'booking-page',
    path: '/booking',
    element: <BookingFlightPage />,
  },
  {
    id: 'booking-confirmation-page',
    path: '/booking-confirmation',
    element: <BookingConfirmationPage />,
  },
];
