import { NavLink } from 'react-router-dom';
import Logo56x56Bookifly from '../@logos/56x56/Logo56x56Bookifly';

export default function AppHeader() {
  return (
    <header className="absolute flex w-full justify-center py-4">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-10 lg:w-[1028px] lg:px-0">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-4">
            <Logo56x56Bookifly />
            <h2 className="font-inter text-[20px] font-bold text-light-50">Bookifly</h2>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
