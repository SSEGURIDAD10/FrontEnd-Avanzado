import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <>
            {/* BEM PARA NUESTRAS CLASES EN HTML */}
            {/* kebabcase para nombrar nuestras className
        en React con minúsculas */}
            <nav className="header">
                {" "}
                {/*  BLOQUE */}
                <NavLink className="header__logo" to="/">
                    LOGO
                </NavLink>
                <ul className="header__nav-list" />
                <li className="header__list-item">
                    <NavLink
                        className="header__item-link header__item-link--is-active"
                        to="/home"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="header__item-link" to="/dashboard">
                        Dashboard
                    </NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="header__item-link" to="/secret">
                        Secret
                    </NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="header__item-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink className="header__item-link" to="/signup">
                        Signup
                    </NavLink>
                </li>
            </nav>
        </>
    );
};

export default Header;
