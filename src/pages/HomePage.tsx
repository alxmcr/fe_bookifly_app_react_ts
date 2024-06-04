import { NavLink, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleGoToFlightsPage = () => {
    navigate('/flights');
  };

  return (
    <main>
      <div>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/flight/1">Flight Page #1</NavLink>
        <NavLink to="/flight/2">Flight Page #2</NavLink>
        <NavLink to="/flights">Flights page</NavLink>
        <NavLink to="/booking-confirmation">Booking confirmation page</NavLink>
      </div>
      <h1>Home Page</h1>
      <div>
        <button onClick={handleGoToFlightsPage}>Go to flights</button>
      </div>
    </main>
  );
}
