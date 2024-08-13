import { NavLink } from 'react-router-dom'
import './header.scss';

const Header = () => {
  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  return (
    <>
      {/* BEM PARA NUESTRAS CLASES EN HTML  */}
      <nav className="header">
        {/*  BLOQUE */}
        <NavLink className="header__logo" to="/"> LOGO </NavLink>
        <ul className="header__nav-list">
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/home"> Home </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/secret">
              Secret
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">
              Login
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
