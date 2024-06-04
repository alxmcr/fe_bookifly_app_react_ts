import { RouteObject } from 'react-router-dom';
import BookingConfirmationPage from '../pages/BookingConfirmationPage';
import FlightPage from '../pages/FlightPage';
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
    id: 'flight-page',
    path: '/flight/:id',
    element: <FlightPage />,
  },
  {
    id: 'booking-confirmation-page',
    path: '/booking-confirmation',
    element: <BookingConfirmationPage />,
  },
];
