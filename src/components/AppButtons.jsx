import { NavLink } from 'react-router-dom';

const AppButtons = () => {
  return (
    <nav className="flex justify-center mb-10">
      <ul className="flex bg-lightDark rounded-lg overflow-hidden">
        <li>
          <NavLink
            to="cities"
            exact="true"
            className={({ isActive }) =>
              `uppercase text-white px-5 p-1 text-sm font-semibold block ${isActive ? 'activeLink' : ''}`
            }
          >
            CITIES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              `uppercase text-white px-5 p-1 text-sm font-semibold block ${isActive ? 'activeLink' : ''}`
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppButtons;
