import React from 'react';
import Logo from "../../assets/main/Logo.svg"

const Header = () => {
  return (
    <div>
      <section className="header container section">
      <nav className="nav__menu">
      <div className="nav__menu__left">
      <ul className="nav__menu__list">
        <li className="nav__menu__item">
          <a href="#new arrival" className="nav__menu__link"><h4 className="header__title">NEW ARRIVAL</h4></a>
        </li>

        <li className="nav__menu__item">
          <a href="#men" className="nav__menu__link">
         <h4 className="header__title">MEN</h4>
          </a>
        </li>

        <li className="nav__menu__item">
          <a href="#women" className="nav__menu__link">
          <h4 className="header__title">WOMEN</h4>
          </a>
        </li>

        <li className="nav__menu__item">
          <a href="#kids" className="nav__menu__link">
          <h4 className="header__title">KIDS</h4>
          </a>
        </li>
      </ul>
      </div>
      <div className="menu__centre">
        <img src={Logo}alt="logo" className="menu__centre__logo" />
      </div>
      <div className="nav__menu__right">
        <ul className="nav__menu__list__right">
          <li className="nav__menu__icon">
          <a href="#search" className="nav__link">
          <i className="icon-magnifier"></i>
          </a>
        </li>

        <li className="nav__menu__icon">
          <a href="#user" className="nav__link">
          <i className="icon-user"></i>
          </a>
        </li>

        <li className="nav__menu__icon">
          <a href="#bag" className="nav__link">
          <i className="icon-bag"></i>
          </a>
        </li>
        </ul>
      </div>
    </nav>

    
      </section>
    </div>
  )
}

export default Header
